import React from "react";

const About = (props) => {
  const currentCategory = {
    name: "Jane Doe",
    email:"janeDoe@gmail.com",
    web: "www.example.com",
    about: "description of user"
  };
  return(
      <section className="my-5">
        <h1 id="about" className="infoName">
        {currentCategory.name}
        <p>{currentCategory.email}</p>
        <p>{currentCategory.web}</p>
        <p>{currentCategory.about}</p>
        </h1>
      </section>
      );
      }

export default About;