import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Pagination from "../Pagination";
import PostPreview from "./PostPreview";
const PostList = ({ posts, title }) => {
  /**---------------- Pagination ----------------**/
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  if (posts == null || !posts.length) {
    return <h3 className="noPost">No Posts Yet</h3>;
  }
 

console.log(posts);
  console.log(currentPosts)
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {posts &&
              currentPosts.map((post) => (
                console.log(post),
               <PostPreview post={post} key={post._id} username={post.username}/>
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
