import React from "react";

const CardFooter = ({ post }) => {
  return (
    <div className="formCard-footer">
      <div className="card_icon_menu">
        {/* TO-DO Get links from post  */}
        <div className="d-flex justify-content-between">
          <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
            {/* {post.links.length} likes */}www.github.com
          </h6>
          <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
            www.deepen.com
            {/* {post.likes.length} likes */}links
          </h6>
          <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
            {/* {post.comments.length} comments */} www.youtube.com
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
