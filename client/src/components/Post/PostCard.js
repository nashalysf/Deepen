import React from "react";
import CardHeader from "../Home/post_card/CardHeader";
import CardBody from "../Home/post_card/CardBody";
import CardFooter from "../Home/post_card/CardFooter";
import ListTools from "../ListTools";
import ListLinks from "../ListLinks";

const PostCard = ({ post, theme }) => {
  return (
    <div>
      <div className="formCard my-3">
        <CardHeader post={post} />
        <CardBody post={post} theme={theme} />
        <ListLinks/>
        <ListTools/>
        <CardFooter post={post} />
      </div>
    </div>
  );
};

export default PostCard;
