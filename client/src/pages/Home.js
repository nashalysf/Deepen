import React, { useState } from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "../components/Home/PostList";
import Install from "../components/Buttons/Install";
import Search from "../components/Home/Search";
import HomeNav from "../components/Home/HomeNav";
import AddButton from "../components/Buttons/AddButton";
import ToTheTopBtn from "../components/Buttons/ToTheTop";


const Home = () => {
  const [categories] = useState([
    {
      name: "Home",
    },
    {
      name: "Search",
    },
  ]);
  const [searchSelected, setSearchSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <HomeNav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        searchSelected={searchSelected}
        setSearchSelected={setSearchSelected}
      ></HomeNav>
      <Install />
    
      <div>
        <div className="flex-row justify-space-between">
          
          <div className="col-12 mb-3">
            {" "}
            {loading && !loggedIn ? (
              <div>Loading...</div>
            ) : (
              //a header centered on the page
            <div>
                <PostList posts={posts} />
              </div>
            )} {searchSelected ? (
              <>
              <Search></Search>
              </>
            ):(
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex-row justify-space-between">
        <AddButton />
        <ToTheTopBtn />
      </div>
    </main>
  );
};

export default Home;
