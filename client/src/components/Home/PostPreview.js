import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Pagination from "../Pagination";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TagIcon from "@mui/icons-material/Tag";
import GroupsIcon from "@mui/icons-material/Groups";
import LikeButton from "../Buttons/LikeButton";
import Box from "@mui/material/Button";
import proposal from "../../images/png/project-proposal.png";
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const PostPreview = ({ post, username }) => {
  console.log(username);
    const { loading, data } = useQuery(username ? QUERY_USER: QUERY_ME, {
        variables: { username: username },
    });
    const user1 = data?.me || data?.user || {};
    const [readMore, setReadMore] = useState(false);
    console.log(data);
console.log(post);
console.log(user1.username);
console.log(user1.avatar);

return (
    <Grid item key={post._id} xs={12} sm={6} md={4}>
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader 
      //render avatar with src  if post.user.avatar is not null
      
      avatar={  <Avatar
      src={user1.avatar}
      sx={{ bgcolor: red[500] }}
      aria-label="recipe"
    >
    </Avatar>}

        action={<IconButton aria-label="settings"></IconButton>}
        title={post.title}
        subheader={post.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{
          // 16:9
          pt: "10%",
        }}
        image={proposal}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography>
          {readMore
            ? post.description
            : `${post.description.substring(0, 60)}...`}
          {post.description.length > 100 && (
            <Button>
              <span
                className="readMore"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Collapse" : "Read more"}
              </span>
            </Button>
          )}
        </Typography>
      </CardContent>
      <Box
        position="relative"
        display="flex"
        alignItems="center">
        <CardActions >
          <LikeButton post={post} />

          <IconButton aria-label="collab" underline="hover">
            <GroupsIcon sx={{ fontSize: 25, marginLeft: "0px" }} />
          </IconButton>

          <IconButton href={`/post/${post._id}`}>
           <VisibilityIcon
              sx={{
              fontSize: 60,
              marginLeft: "2px",
              color: "black",
            }}
            />
          </IconButton>

         <IconButton aria-label="share" underline="hover">
            <ShareIcon sx={{ fontSize: 20, marginLeft: "0px" }} />
          </IconButton>

          <IconButton aria-label="tags" underline="hover">
            <TagIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  </Grid>
  );
};

export default PostPreview;