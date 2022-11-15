import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [description, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
        console.log(JSON.stingify(cache.readQuery({ query: QUERY_ME })))
      } catch (e) {
        console.warn("First post insertion by user!");
      }
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (error) {
        console.warn("First post added to posts!");
      }
      // update post array's cache
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      console.log(event.target.value);
      const { name, value } = event.target;
       //setUserData({ ...postData, [name]: value });
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  //  const formState = {
  //     description:  ''
  //   };
  //   const [postData, setUserData] = useState(formState);
 // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    
    try { await addPost({ variables: { description } });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          className="col-12 col-md-6 mb-5 titlePost"
          type="text"
          name="Title"
          placeholder="Title"
          required
        />
        <textarea
          placeholder="Here's a new post..."
          value={description}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Create Post
        </button>
      </form>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
    </div>
  );
};

export default PostForm;
