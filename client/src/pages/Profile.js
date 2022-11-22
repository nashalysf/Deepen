import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PostForm from "../components/CreatePost/PostForm";
import PostList from "../components/Home/PostList";
import FriendList from "../components/Profile/FriendList";
import setting from "../images/png/settings.png";
import ProfileNav from "../components/Profile/ProfileNav";
import About from '../components/Profile/About';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import AddButton from "../components/Buttons/AddButton";
import ToTheTopBtn from "../components/Buttons/ToTheTop";
const Profile = ({props}) => {
  const [categories] = useState([ 
    {
      name: 'About'
    },
    { 
      name: 'Works'
    }
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [addFriend] = useMutation(ADD_USER);
  

  let { username: userParam } = useParams();

  if (window.location.pathname.length < 9) {
    let profilePathName = window.location.pathname.substring(9);
    if (profilePathName !== Auth.getProfile().data.username) {
     userParam = profilePathName;

    }
  }
  console.log(userParam + "userParam");
//create query to get user data or me data QUERY_USER or QUERY_ME
  const { loading, data } = useQuery( userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

console.log(data);

  
  const user = data?.me || data?.user || {};
  let profilePathName = "";
  if (window.location.pathname.length <9) {
    profilePathName = window.location.pathname.substring(9);
  }
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile:username" />;
  // }
  
  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && window.location.pathname.length <9) {
  //   profilePathName = window.location.pathname.substring(9).concat(Auth.getProfile().data.username);
  //   return <Navigate to="/profile" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }
  //console.log(Auth.getProfile().data.username)
  const token = localStorage.getItem("id_token");
  if (token === null) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Follow
          </button>
        )}
      </div>
      <div className="mb-3">{!userParam}</div>
      <div className="coverProfile"></div>
      <div className="profilePic"></div>
      <button 
      className="editProfile" 
      id="settings" 
      onClick="alert('clicked')">
        <img 
        alt="profilePic" 
        src={setting} /> </button>
     
      <ProfileNav
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
      aboutSelected = {aboutSelected}
      setAboutSelected = {setAboutSelected}
      ></ProfileNav>
      {!aboutSelected ? ( 
        <> 
        
        </>
      ) : (
        <About></About>
      )
    }
  
    
      <div className="flex-row justify-center ">
        <div className="col-12 mb-3 col-lg-8">
          <PostList posts={user.posts} title={`${user.username}'s posts...`} />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
        <AddButton />
        <ToTheTopBtn />
      </div>
    </div>
  );
};

export default Profile;
