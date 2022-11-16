import { React } from "react";
import PostForm from "../components/PostForm";

import "../css/form.css";

const CreatePosts = () => {
  return (
    <>
      <div>
        <h1 className="create">Create Posts</h1>
      </div>
      <PostForm />
    </>
  );
};

export default CreatePosts;
