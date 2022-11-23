import React, { useState } from 'react';
import { ADD_LIKE } from "../../utils/mutations";
import IconButton from "@mui/material/IconButton";
import { useMutation } from "@apollo/client";


const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);
  const [addLike] = useMutation(ADD_LIKE);

// function likeHandler(post) {
  //   console.log(posts[0].likeCount);
  //   try {
  //     addLike({
  //       variables: {
  //         postId: post._id,
  //         likeCount: post.likeCount + 1,
  //       },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }

  // }
  const handleClick = (post) => {
    if (isClicked) {
         try {
      addLike({
        variables: {
          postId: post._id,
          likeCount: post.likeCount + 1,
        },
      });
    } catch (e) {
      console.error(e);
    }
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Like | ${likes}` }</span>
    </button>
  );
};

export default LikeButton;