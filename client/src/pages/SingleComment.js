import React from "react";
import { useParams } from "react-router-dom";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_COMMENTS } from "../utils/queries";
import ReplyList from "../components/ReplyList";

const SingleComment = (props) => {
  const { id: commentId } = useParams();
  
  const { loading, data } = useQuery(QUERY_COMMENTS, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {comment.username}
          </span>{" "}
          post on {comment.createdAt}
        </p>
        <div className="card-body">
          <p>{comment.commentBody}</p>
        </div>
      </div>

      {comment.replyCount > 0 && <ReplyList replies={comment.replies} />}

      {Auth.loggedIn() && <ReplyList commentId={comment._id} />}
    </div>
  );
};

export default SingleComment;
