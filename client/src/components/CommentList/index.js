import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COMMENTS } from "../utils/queries";
import Reply from '../components/ReplyList';

const CommentList = (props) => {
  const { id: commentId } = useParams();

  const { loading, data } = useQuery(QUERY_COMMENTS, {
    variables: { id: commentId },
  });

  const comment = data?.post || {};

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
          comment on {comment.createdAt}
        </p>
        <div className="card-body">
          <p>{comment.commentBody}</p>
        </div>
      </div>

      {comment.replyCount > 0 && (
        <Reply reply={comment.replies} />
      )}

      {Auth.loggedIn() && <Reply postId={comment._id} />}
    </div>
  );
};

export default CommentList;
