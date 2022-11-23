import React from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/Post/Comment/CommentList";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_COMMENTS, QUERY_POST } from "../utils/queries";
import PostCard from "../components/Post/PostCard";
import Auth from "../utils/auth";
import CommentForm from "../components/Comment/CommentForm";
import DeletePost from "../components/Post/DeletePost";


const SinglePost = (props) => {
  const { loading, data }  = useQuery(QUERY_POSTS, QUERY_COMMENTS);
  const { id: postId } = useParams();
  const posts = data?.posts || [];
  const postArray = [...posts.values()];
  let post = data?.post || {};
  
  for (let index = 0; index < postArray.length; index++) {
    if (postId === postArray[index]._id) {
       post = postArray[index];
    }
  }
 
   console.log(post);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostCard post={post} />
      {post.commentCount > 0 && <CommentList comments={post.comments} />}
      {Auth.loggedIn() && <CommentForm postId={post._id} />}
      <DeletePost/>
    </div>
  );
};

export default SinglePost;
