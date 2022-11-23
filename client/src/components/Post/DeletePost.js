import React, { Component } from "react";
import { Link } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { DELETE_POST } from "../../utils/mutations";
import { Button } from "react-bootstrap";

import { useParams } from "react-router-dom";

//create a component that will delete a post
const DeletePost = () => {
  const { id: postId } = useParams();
  const [deletePost] = useMutation(DELETE_POST);

  const handleDeletePost = async (event) => {
    event.preventDefault();

    try {
      const { data } = await deletePost({
        variables: { id: postId },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div  className="deletePost">
      <Button
       
        variant="default"
        onClick={handleDeletePost}
      >
        Delete Post
      </Button>
      
    </div>
  );
};

export default DeletePost;
