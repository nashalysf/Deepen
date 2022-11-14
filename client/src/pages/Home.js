import React from "react";
import PostList from "../components/PostList";
// import PostForm from '../components/PostForm';
// import FollowerList from '../components/FollowerList';
import HomeNav from "../components/HomeNav"

// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {


  return (
    <main>
      <HomeNav></HomeNav>
      <div>
        <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>

        </div>
      </div>
    </main>
  )
          
};
export default Home;
