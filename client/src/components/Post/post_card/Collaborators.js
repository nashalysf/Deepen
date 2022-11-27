import React, { useState, useEffect } from "react";
import { ADD_COLLABORATOR } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";
import CollabButton from "../../Buttons/CollabButton";
import { useNavigate } from "react-router-dom";
import CollabForm from "../../../pages/CollabForm";

const Collaborators = ({ post, user}) => {
  const [addCollaborator] = useMutation(ADD_COLLABORATOR);
  const navigate = useNavigate();
  let { collaborators: collaboratorArray } = post;
  let [userIsCreator, setUserIsCreator] = useState(false);
  

  if(!userIsCreator){
    if(post.username === Auth.getProfile().data.username){
      setUserIsCreator(true);
    }
  }
  
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
  const createForm = () => {
    let useremail = user.email;
  console.log(useremail);
    <CollabForm user={user}/>
    navigate("/collab",{state:{email:useremail}});
 };
console.log(collaboratorArray);
  return (
    <div>
      <h5>Collaborators</h5>
      {collaboratorArray.map((collaborator) => (
        <button className="btn w-100 display-block mb-2 bw">
          <Link className="bw" to={`/profile/${collaborator}`}>
            {collaborator}
          </Link>
          <CollabButton userIsCreator={userIsCreator}/>
          
        </button> 
      ))}
      <div className="flex-row justify-center justify-space-between-md align-stretch">
      <button className=" buttonAccept3" onClick={handleFollow}>Collaborate</button>
      <button className=" buttonAccept3" onClick={createForm}>Reach Developer</button>
      </div>
    </div>
  );
};
export default Collaborators;
