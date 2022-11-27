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
import { QUERY_USER } from "../../utils/queries";
import {useQuery} from "@apollo/client";
import PostPreview from "./PostPreview";
const PostList = ({ posts, title }) => {
  /**---------------- Pagination ----------------**/
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /**---------------- Post-> Description -> Read More ----------------**/
  const [readMore, setReadMore] = useState(false);
 
  if (posts == null || !posts.length) {
    return <h3 className="noPost">No Posts Yet</h3>;
  }
 

console.log(posts);
  
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts &&
              currentPosts.map((post) => (
               <PostPreview post={post} key={post._id} />
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
};

export default PostList;
