import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const PostForm = () => {
  const [description, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [title, setTextTitle] = useState("");
  const [links, setTextLinks] = useState("");
  const [tools, setTools] = useState([]);
  const toolsArray = [
    "Javascript",
    "Java",
    "Typescript",
    "React",
    "Vue",
    "MongoDB",
    "Mongoose",
    "GraphQL",
    "Apollo",
    "SQL",
    "Sequelize",
    "Python",
    "CSS",
  ];

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
        console.log("hola");
      } catch (e) {
        console.warn("First post insertion by user!");
      }
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
        console.log("hola");
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

  const handleChangeLinks = async (event) => {
    setTextLinks(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({ variables: { description, title, tools, links } });
      console.log("tools", tools);
      // clear form value
      setText("");
      setTextTitle("");
      setTools([]);
      setCharacterCount(0);
      setTextLinks("");
    } catch (e) {
      console.error(e);
    }
  };

  //console.log(tools);
  return (
    <div>
      <p
        className={`m-3 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center align-stretch"
        onSubmit={handleFormSubmit}
      >
        
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "75ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-helperText"
              label="Title"
              defaultValue="Title"
              helperText="Title lenght must be between 5 and 15 characters."
              variant="standard"
              value = {title}
              onChange={handleChangeTitle}
            />
          </div>
          <div>
            <TextField
              id="descriptionText"
              label="Description"
              defaultValue="Here's a new post..."
              helperText="Description lenght must be between 0 and 180 characters."
              variant="standard"
              value = {description}
              onChange={handleChangeDescription}
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-static"
              label="Links"
              multiline
              rows={4}
              defaultValue="www.github.com"
              variant="standard"
              helperText="Input all the important links for your post."
              value={links}
              onChange={handleChangeLinks}
            />
          </div>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 500 }}>
          <InputLabel id="demo-simple-select-helper-label">Languages</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            multiple
            value={tools}
            label="Languages"
            onChange={handleChangeTool}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {toolsArray.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>Select all the languages and libraries used.</FormHelperText>
        </FormControl>
        <button className="form-input" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
