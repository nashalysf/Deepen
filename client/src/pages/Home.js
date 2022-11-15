import React, { useState } from "react";
import PostList from "../components/PostList";
// import FollowerList from '../components/FollowerList';
import HomeNav from "../components/HomeNav"
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../utils/queries';
import FriendList from '../components/FriendList';
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
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];
  console.log(posts);
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <HomeNav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></HomeNav>
      <div>
        <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className="col-12 mb-3">
      
          </div>
        )}
        <div className='col-12 mb-3'> {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} title="Some Feed for Projects(s)..." />
      )}</div>

        </div>
      </div>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
         
            <div>Loading...</div>
          
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
