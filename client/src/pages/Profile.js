import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { ADD_FOLLOWER } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import PostList from "../components/Home/PostList";
import FollowerList from "../components/Profile/FollowerList";
import ProfileNav from "../components/Profile/ProfileNav";
import About from '../components/Profile/About';
import AddButton from "../components/Buttons/AddButton";
import ToTheTopBtn from "../components/Buttons/ToTheTop";
import setting from "../images/png/settings.png";

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
  const [addFollower] = useMutation(ADD_FOLLOWER);
  let { username: userParam } = useParams();

// if username is in the URL, useQuery to retrieve that user's data 
  if (window.location.pathname.length < 9) {
    let profilePathName = window.location.pathname.substring(9);
    if (profilePathName !== Auth.getProfile().data.username) {
     userParam = profilePathName;
    }
  }
  console.log(userParam);
// data from the `QUERY_USER` query is for the user whose profile is being viewed
// data from the `QUERY_ME` query is for the logged-in user
  const { loading, data } = useQuery( userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }
console.log(user);
console.log(user._id);
  const token = localStorage.getItem("id_token");
  if (token === null) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  console.log(user.username);
  //create function for following a user
  const handleFollow = async () => {
    try {
      await addFollower({variables:
         { username: user.username }});
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
          <button className="btn ml-auto" onClick={handleFollow}>
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
          
          <FollowerList
            username={user.username}
            followerCount={user.followerCount}
            followers={user.followers}
          />
        </div>
        <AddButton />
        <ToTheTopBtn />
      </div>
    </div>
  );
};

export default Profile;
