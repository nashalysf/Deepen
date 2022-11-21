import React, { useState } from "react";
const CardBody = ({ post, theme }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className=".formCard-body">
      <div
        className="card_body-content"
        style={{
          filter: theme ? "invert(1)" : "invert(0)",
          color: theme ? "white" : "#111",
        }}
      >
        <span>
          {post.description.length < 60
            ? post.description
            : readMore
            ? post.description + " "
            : post.description.slice(0, 60) + "....."}
        </span>
        {post.description.length > 60 && (
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? post.description : "Read more"}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardBody;
