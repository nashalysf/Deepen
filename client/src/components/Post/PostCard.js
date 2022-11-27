import React from "react";
import CardHeader from "./post_card/CardHeader";
import CardBody from "./post_card/CardBody";
import CardFooter from "./post_card/CardFooter";
import ListTools from "./post_card/ListTools";
import ListLinks from "./post_card/ListLinks";
import Container from "@mui/material/Container";
import Collaborators from "./post_card/Collaborators";
const PostCard = ({ post, theme }) => {

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="700px">
      <div className="formCard my-0">
        <CardHeader post={post} />
        <CardBody post={post} theme={theme} />
        <h3 className="bw">Links</h3>
        <ListLinks />
        <h3 className="bw">Tools</h3>
        <ListTools post={post} />
        <h3 className="bw">Collaborators</h3>
        <Collaborators post={post} />  
        <br />
        <CardFooter post={post} />
      </div>
      
      </Container>
    </div>
  );
};

export default PostCard;
