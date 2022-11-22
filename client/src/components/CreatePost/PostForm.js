import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';




const PostForm = () => {
  const [description, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [title, setTextTitle] = useState("");
  const [tools,setTools] = useState([]);
  const toolsArray = ['Javascript','Java','Typescript','React','Vue','MongoDB','Python','CSS', ];

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
  const handleChangeTitle = async (event) => {
    setTextTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleChangeTool = async (event) => {
    setTools(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({ variables: { description, title, tools } });
console.log("tools",tools);
      // clear form value
      setText("");
      setTextTitle("");
      setTools([]);
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  
  //console.log(tools);
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
        <textarea
          className="form-input col-12 col-md-9"
          id="postTitle"
          type="text"
          value={title}
          name="Title"
          placeholder="Post Title"
          onChange={handleChangeTitle}
        />
        <textarea
          placeholder="Here's a new post..."
          value={description}
          className="form-input col-12 col-md-9"
          onChange={handleChangeDescription}
        ></textarea>
        <FormControl  sx={{ m: 1, minWidth: 500 }}>
        <InputLabel  id="demo-simple-select-helper-label">Tools</InputLabel>
        <Select labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          multiple
          value={tools}
          label="Tools"
          onChange={handleChangeTool}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}

        >
          {toolsArray.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
            ))}
        </Select>
        
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
