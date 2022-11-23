import React from "react";

const CollabForm = () => {
 

  return (
    <>
      <main>
        <div className="collabCard">

        <h1> Collaboration Form </h1>
        <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="What's your name?">

        </input>
        <input 
        type="email" 
        id="collabEmail" 
        placeholder="What's your email?" 
        name="email">

        </input>
        <input 
        type="text" 
        id="GitHub" 
        placeholder="What's your GitHub?" 
        name="github">

        </input>
        <textarea id="collaborate" placeholder="How can you collaborate in this project?"></textarea>
        <button type="submit" id="submitCollab">Submit</button>
        </div>
      </main>
    </>
    
  );
};

export default CollabForm;
