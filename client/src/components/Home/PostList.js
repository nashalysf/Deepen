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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TagIcon from "@mui/icons-material/Tag";
import GroupsIcon from "@mui/icons-material/Groups";
import { ADD_LIKE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import LikeButton from "../Buttons/LikeButton";
import Box from "@mui/material/Button";


const PostList = ({ posts, title }) => {
  /**---------------- Pagination ----------------**/
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /**---------------- Like ----------------**/
  const [isClicked, setIsClicked] = useState(false);
  const [addLike] = useMutation(ADD_LIKE);
  /**---------------- Post-> Description -> Read More ----------------**/
  const [readMore, setReadMore] = useState(false);

  if (posts == null) {
    return <h3>No Posts Yet</h3>;
  }

  if (!posts.length) {
    return <h3 className="noPost">No Posts Yet</h3>;
  }
  const handleClick = (post) => {
    if (isClicked) {
      try {
        addLike({
          variables: {
            postId: post._id,
            likeCount: post.likeCount + 1,
          },
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        addLike({
          variables: {
            postId: post._id,
            likeCount: post.likeCount - 1,
          },
        });
      } catch (e) {
        console.error(e);
      }
    }
    setIsClicked(!isClicked);
  };

console.log(posts[0].likeCount);
  
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts &&
              currentPosts.map((post) => (
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
                      avatar={
                        <Avatar
                          sx={{ bgcolor: red[500] }}
                          aria-label="recipe"
                        ></Avatar>
                      }
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
                      image="https://source.unsplash.com/random"
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
                      <Typography>{post.tools}</Typography>
                    </CardContent>
                    <Box
                    position="relative"
  display="flex"
  alignItems="center"
  
>
                    <CardActions >
                     
                      <IconButton
                        aria-label="add to favorites"
                        underline="hover"
                        onClick={handleClick}
                      >
                        {post.likeCount}
                        <FavoriteIcon fontSize="small" />
                      </IconButton>

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
              ))}
          </Grid>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            color="secondary"
          />
        </Container>
      </div>
    </div>
  );
  // function likeHandler(post) {
  //   console.log(posts[0].likeCount);
  //   try {
  //     addLike({
  //       variables: {
  //         postId: post._id,
  //         likeCount: post.likeCount + 1,
  //       },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }

  // }
};

export default PostList;
