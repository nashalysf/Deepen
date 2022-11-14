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
          <h4>Username</h4>
        </div>
        <ul>
            <li>Work</li>
            <li>Followers</li>
            <li>Likes</li>
        </ul>
      </div>
      <div className="nav">

     
      </div>
      
    </div>
  );
};

export default Profile;