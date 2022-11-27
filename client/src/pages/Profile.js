import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { ADD_FOLLOWER, ADD_IMAGE } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import PostList from "../components/Home/PostList";
import FollowerList from "../components/Profile/FollowerList";
import ProfileNav from "../components/Profile/ProfileNav";
import About from "../components/Profile/About";
import AddButton from "../components/Buttons/AddButton";
import ToTheTopBtn from "../components/Buttons/ToTheTop";
import setting from "../images/png/settings.png";
import { Avatar } from "@mui/material";

const Profile = ({ props }) => {
  const [categories] = useState([
    {
      name: "About",
    },
    {
      name: "Works",
    },
    {
      name: "Followers",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [addFollower] = useMutation(ADD_FOLLOWER);
  const [addImage] = useMutation(ADD_IMAGE);
  let { username: userParam } = useParams();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  // If condition is true, then the user is on their own profile page
  if (window.location.pathname.length < 9) {
    let profilePathName = window.location.pathname.substring(9);
    if (profilePathName !== Auth.getProfile().data.username) {
      userParam = profilePathName;
    }
  }

  // data from the `QUERY_USER` query is for the user whose profile is being viewed
  // data from the `QUERY_ME` query is for the logged-in user
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is logged in, then the user can follow other users and navigate to their own profile page
  const token = localStorage.getItem("id_token");
  if (token === null) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleFollow = async () => {
    try {
      await addFollower({ variables: { username: user.username } });
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * These functions are used to
   * 1. Choose an image
   * 2. Upload an image
   * 3. Set the user's profile picture
   */
  const handleImage = async () => {
    try {
      await addImage({
        variables: {
          photo: url,
          username: user.username,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "k99l75sc");
    data.append("cloud_name", "da1sqgyhy");
    fetch("  https://api.cloudinary.com/v1_1/da1sqgyhy/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
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
      <div className="profilePic">
        <Avatar src={user.avatar} sx={{ width: 200, height: 200 }} />
      </div>
      <button className="editProfile" id="settings" onClick={handleUpload}>
        <img alt="profilePic" src={setting} />{" "}
      </button>
      {showUpload && (
        <div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button onClick={uploadImage}>Upload</button>
          <button className="btn btn-primary" onClick={handleImage}>
            Set profile picture
          </button>
        </div>
      )}
      <ProfileNav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></ProfileNav>
      {!aboutSelected ? <></> : <About></About>}

      <div className="flex-row justify-center ">
        <div className="col-lg-9">
          <PostList
            posts={user.posts}
            title={`${user.username}'s posts...`}
            user={user}
          />
        </div>
        <div>
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
