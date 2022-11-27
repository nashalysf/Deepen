import React, { useState } from "react";
import { ADD_LIKE } from "../../utils/mutations";
import IconButton from "@mui/material/IconButton";
import { useMutation } from "@apollo/client";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = (post) => {
  const [likes, setLikes] = useState(post.post.likeCount);
  const [isClicked, setIsClicked] = useState(false);
  const [addLike] = useMutation(ADD_LIKE);
 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!isClicked) {
      try {
        await addLike({
          variables: {
            postId: post.post._id,
            likeCount: post.post.likeCount + 1,
          },
        });
        setLikes(post.post.likeCount + 1);
        setIsClicked(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
      <form onSubmit={handleFormSubmit} >
        <IconButton
          aria-label="add to favorites"
          underline="hover"
          type="submit"
        >
          <FavoriteIcon fontSize="small" />
          {likes}
        </IconButton>
      </form>
   
  );
};

export default LikeButton;
