import React from "react";

//This component displays the about tab in the profile page
const About = (props) => {
  const currentCategory = {
    name: "Jane Doe",
    email:"janeDoe@gmail.com",
    web: "www.example.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };
  return(
      <section className="my-5">
        <div id="about" >
        <h1 className="infoName">{currentCategory.name}</h1>
        <p className="aboutEmail">{currentCategory.email}</p>
        <p className="aboutWeb">{currentCategory.web}</p>
        <h4 className="aboutMe">About me</h4>
        <p className="aboutDescrpition">{currentCategory.about}</p>
        </div>
      </section>
      );
      }

export default About;