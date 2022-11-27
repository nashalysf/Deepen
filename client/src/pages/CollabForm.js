import React from "react";
import {useLocation} from 'react-router-dom';

const CollabForm = ({route, navigate}) => {
const location = useLocation();
const email = "mailto:".concat(location.state.email);
  return (
    <>
      <main>
        <form
          action={email}
          method="post"
          enctype="text/plain"
        >
        <div className="collabCard">
          <h1> Collaboration Form </h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What's your name?"
          ></input>
          <input
            type="email"
            id="collabEmail"
            placeholder="What's your email?"
            name="email"
          ></input>
          <input
            type="text"
            id="GitHub"
            placeholder="What's your GitHub?"
            name="github"
          ></input>
          <textarea
            type="text"
            id="collaborate"
            placeholder="How can you collaborate in this project?"
            name="collaborate"
          ></textarea>
          <button type="submit" id="submitCollab">
            Submit
          </button>
        </div>
        </form>
      </main>
    </>
  );
};

export default CollabForm;
