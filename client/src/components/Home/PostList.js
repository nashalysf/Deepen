import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className="noPost">No Posts Yet</h3>;
  }

  const theme = createTheme();
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts &&
              posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={<IconButton aria-label="settings"></IconButton>}
                      title={post.title}
                      subheader={post.createdAt}
                    />
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "10%",
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post._id}
                      </Typography>
                      <Typography>{post.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/post/${post._id}`} underline="hover" >
                        View Post
                      </Link>
                      {/* <Button size="small">View</Button>
                      <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default PostList;
