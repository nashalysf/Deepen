import React from "react";
import { ADD_COLLABORATOR } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";

const Collaborators = ({ post }) => {
  const [addCollaborator] = useMutation(ADD_COLLABORATOR);
  console.log(post);
  const handleFollow = async (event) => {
    event.preventDefault();
    try {
      await addCollaborator({
        variables: {
          postId: post._id,
          username: Auth.getProfile().data.username,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="collaborators">
      <h3 className="bw">Collaborators</h3>
      <div className="bw">
        {post.collaborators}
        <button className="btn ml-auto" onClick={handleFollow}>
          Collaborate
        </button>
      </div>
    </div>
  );
};
export default Collaborators;
