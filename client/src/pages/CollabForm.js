import { React } from "react";

const CollabForm = () => {
  
  return (
    <>
      <main>
        <input className="collabCard">
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            id="collabTitle"
            className="collabInput"
            value="Project-Title"
          ></input>
          <form className="log-input ">
            <input
              className="collabEmail"
              placeholder="Email"
              name="email"
              type="email"
              id="userEmail"
            />
          </form>
          <h2 id="collabUserName">User's full name</h2>

          <textarea
            type="text"
            name="collaborate"
            placeholder="How can you collab?"
            id="collaborate"
          ></textarea>
          <div className="links gitlink">
            <input
              type="url"
              name="links"
              placeholder="GitHub"
              id="collabLinks"
              className="collabInput"
            />
          </div>
        </input>
        <button type="submit" id="submitCollab">
          Send
        </button>
      </main>
    </>
    
  );
};

export default CollabForm;
