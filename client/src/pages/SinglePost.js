import React from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/Post/Comment/CommentList";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_COMMENTS } from "../utils/queries";
import PostCard from "../components/Post/PostCard";
import Auth from "../utils/auth";
import CommentForm from "../components/Comment/CommentForm";

const SinglePost = (props) => {
  const { data } = useQuery(QUERY_POSTS, QUERY_COMMENTS);
  const { id: postId } = useParams();
  const posts = data?.posts || [];
  const postArray = [...posts.values()];
  const post = postArray.at(postId);
console.log(post);


  return (
    <div>
      <PostCard post={post} />
      {post.commentCount > -1 && <CommentList comments={post.comments} />}
      {Auth.loggedIn() && <CommentForm postId={post._id} />}
    </div>
  );
};

export default SinglePost;
