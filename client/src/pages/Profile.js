//Profile components: about, works, saved posts
import React from "react";
import cover from "../images/logo-black.png";
import About from "../components/About";
import ProfileNav from "../components/ProfileNav";
import UploadAndDisplayImage from "../utils/imageUpload";

const Profile = () => {
  return (
    <div>
      <div className="profileTop">
        <div className="userInfo">
          
        </div>
        <ul className="flex-row">
          <li><UploadAndDisplayImage></UploadAndDisplayImage></li>
          <li>Work</li>
          <li>Followers</li>
          <li>Likes</li>
        </ul>
      </div>
      <div className="flex-row">
        <ProfileNav></ProfileNav>
      </div>
    </div>
  );
};

export default Profile;
