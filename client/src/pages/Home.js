import React from "react";
import PostList from "../components/PostList";
// import PostForm from '../components/PostForm';
// import FollowerList from '../components/FollowerList';

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  )
          
};
export default Home;
