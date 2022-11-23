import React from "react";
import CardHeader from "./post_card/CardHeader";
import CardBody from "./post_card/CardBody";
import CardFooter from "./post_card/CardFooter";
import ListTools from "./post_card/ListTools";
import ListLinks from "./post_card/ListLinks";

const PostCard = ({ post, theme }) => {

  return (
    <div>
      <div className="formCard my-3">
        <CardHeader post={post} />
        <CardBody post={post} theme={theme} />
        <ListLinks />
        <ListTools post={post} />
        <CardFooter post={post} />
        
      </div>
    </div>
  );
};

export default PostCard;
