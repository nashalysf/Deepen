import React, { useState } from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_POSTS } from "../utils/queries";

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

  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

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
          {loggedIn && (
            <div className="col-12 mb-3">
              <PostForm />
            </div>
          )}
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
