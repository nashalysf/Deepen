import React from "react";
import { ADD_COLLABORATOR } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";

const Collaborators = ({ post }) => {
  const [addCollaborator] = useMutation(ADD_COLLABORATOR);
  let { collaborators: collaboratorArray } = post;
  
  const handleFollow = async (event) => {
    event.preventDefault();
    if (!collaboratorArray.includes(Auth.getProfile().data.username)) {
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
    }
  };

  return (
    <div>
      <h5>Collaborators</h5>
      {collaboratorArray.map((collaborator) => (
        <button className="btn w-100 display-block mb-2 bw">
          <Link className="bw" to={`/profile/${collaborator}`}>
            {collaborator}
          </Link>
        </button>
      ))}
      <button onClick={handleFollow}>Collaborate</button>
    </div>
  );
};
export default Collaborators;
