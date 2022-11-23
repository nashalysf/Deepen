import React, { useState } from "react";
import Button from "@mui/material/Button";

const CardBody = ({ post, theme }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className=".formCard-body">
      <div>
        <span className="bw">
          {readMore ? post.description : `${post.description.substring(0, 100)}...`}
        </span>
        {post.description.length > 100 && (
          <Button>
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Collapse" : "Read more"}
          </span>
          </Button>
          
        )}
      </div>
    </div>
  );
};

export default CardBody;
