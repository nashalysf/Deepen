//Profile components: about, works, saved posts
import React from "react";
import cover from "../images/logo.png";
import About from "../components/About";
import ProfileNav from "../components/ProfileNav";


const Profile = () => {
  return (
    <div>
      <div className="profileTop">
        <img
          src={cover}
          className="my-2"
          style={{ width: "50%" }}
          alt="cover"
        />
        <div className="userInfo">
          <img
            src={cover}
            className="profilePic"
            style={{ width: "10%" }}
            alt="profilepic"
          />
          <button className="followBtn">+</button>
          <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          {/* Viewing <usernames>'s profile. */}
        </h2>
      </div>

        </div>
        <ul>
            <li>Work</li>
            <li>Followers</li>
            <li>Likes</li>
        </ul>
      </div>
      <ProfileNav></ProfileNav>
      <div className="nav">
    <About></About>
     
      </div>
      
    </div>
  );
};

export default Profile;