import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments }) => {
  console.log("commentsssssss",comments);
  return (
    <div  className="d-flex justify-content-center padding">
      <div className="card-body">
        <h3 className="card-header text-center bg-dark text-white p-2">Comments</h3>
        <br/>
        {comments &&
          comments.map((comment) => (
            
            <p className="pill mb-2" key={comment._id}>
              {comment.commentBody} {"// "}
              {/* TO-Do Redirect correct link */}
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 700 }}
              >
                {comment.username} on {comment.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
