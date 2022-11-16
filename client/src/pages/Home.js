import React, { useState } from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { Navigate, useParams } from "react-router-dom";
import { QUERY_USER, QUERY_ME, QUERY_POSTS } from "../utils/queries";

import PostList from "../components/PostList";
import FriendList from "../components/FriendList";
import PostForm from "../components/PostForm";
import Install from "../components/Install";
// import FollowerList from '../components/FollowerList';
import HomeNav from "../components/HomeNav";
import AddButton from "../components/AddButton";
import ToTheTopBtn from "../components/ToTheTop";

const Home = () => {
  const [categories] = useState([
    {
      name: "Home",
    },
    {
      name: "Following",
    },
    {
      name: "Search",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const loggedIn = Auth.loggedIn();

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });



  const user = data?.me || data?.user || {};
  const { data: userData } = useQuery(QUERY_ME);
  let posts = data?.posts || [];
  // const user = data?.me || data?.user || {};
  // console.log("hola");
  // const posts = userData.me.posts ||[];
  // if (!userData === null) {
  //   posts=posts.push(userData.me.posts);
  // }
  // else{
  //   const posts = data?.posts || [];

  // }
  return (
    <main>
      <HomeNav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></HomeNav>
      <Install />
    
      <div>
        <div className="flex-row justify-space-between">
          
          <div className="col-12 mb-3">
            {" "}
            {loading && !loggedIn ? (
              <div>Loading...</div>
            ) : (
              <PostList posts={posts} title="Some Post(s)..." />
            )}
          </div>
        </div>
      </div>
      <div className="flex-row justify-space-between">
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList username={userData.me.username} />
          </div>
        ) : null}
        <AddButton />
        <ToTheTopBtn />
      </div>
    </main>
  );
};

export default Home;
