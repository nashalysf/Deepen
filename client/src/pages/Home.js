import React, { useState } from "react";
import PostList from "../components/PostList";
// import PostForm from '../components/PostForm';
// import FollowerList from '../components/FollowerList';
import HomeNav from "../components/HomeNav"


// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";

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
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <main>
      <HomeNav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></HomeNav>
      <div>
        <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'> {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} title="Some Feed for Projects(s)..." />
      )}</div>

        </div>
      </div>
    </main>
  )
          
};
export default Home;
