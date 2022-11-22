import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [description, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [title, setTextTitle] = useState("");

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
        console.log(JSON.stingify(cache.readQuery({ query: QUERY_ME })));
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
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleChangeTitle = (event) => {
    setTextTitle(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({ variables: { description, title } });

      // clear form value
      setText("");
      setTextTitle("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div class="cover"></div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch createCard"
        onSubmit={handleFormSubmit}
      >
        <textarea
          className="titlePost cpInput"
          id="postTitle"
          type="text"
          value={title}
          name="Title"
          placeholder="Post Title"
          onChange={handleChangeTitle}
        />
        <p
          id="count"
          className={`m-5 ${
            characterCount === 280 || error ? "text-error" : ""
          }`}
        >
          Character Count: {characterCount}/280
          {error && <span className="ml-2">Something went wrong...</span>}
        </p>

        <textarea
          placeholder="Here's a new post..."
          value={description}
          id="postDescription"
          className="  col-md-9"
          onChange={handleChange}
          required
        ></textarea>

        <div class="links">
          <input
            type="text"
            name="links"
            placeholder="Links"
            id="postLinks"
            className="links"
          />
          <button type="button" className="addBtn" id="addLink">
            +
          </button>
        </div>
      </form>

      <div class="postVisuals">
        <button type="button" className="visuals" id="postSnippet">
          Add Code Snipet
        </button>
        <button type="image" className="visuals" id="postImage">
          Add Image
        </button>
      </div>

      <label for="tools" className="toolTitle">
        Technologies used:
      </label>

      <ul name="tools" id="postTools">
        <li value="GraphQL" className="toolsList">
          GraphQL
        </li>
        <li value="MongoDB" className="toolsList">
          MongoDB
        </li>
        <li value="React" className="toolsList">
          React
        </li>
        <li value="Node.js" className="toolsList">
          Node.js
        </li>

        <li value="other" className="cpInput other">
          Other
        </li>
      </ul>
      <section className="collabs">
        <h4>Are you looking for collaborators?</h4>
        <input type="radio" id="collab" name="collab" value="Yes" />
        <label for="collab">Yes</label>
        <input type="radio" id="Nocollab" name="Nocollab" value="No" />
        <label for="Nocollab">No</label>
      </section>
      <form className="flex-row justify-center  " onSubmit={handleFormSubmit}>
        <button className="btn createBtn" id="submitPost" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
