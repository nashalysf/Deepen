import React, { useEffect } from "react";
import logo from "../../images/logo-black.png";

const ProfileNav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    setWorkSelected,
    workSelected,
    setSavedListSelected,
    savedListSelected,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <a data-testid="link" href="/">
        <img
          src={logo}
          className="logo"
          style={{ width: "100%" }}
          alt="logo"
        />
      </a>
      <nav className="text-center">
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() =>
                setSavedListSelected(false) || setWorkSelected(false)
              }
            >About </a>
          </li>
          <li className={`mx-2 ${workSelected && "navActive"}`}>
            <span
              onClick={() =>
                setWorkSelected(true) || setSavedListSelected(false)
              } >
              <a href="#projects">Projects</a>
            </span>
          </li>
          <li className={`mx-2 ${savedListSelected && "navActive"}`}>
            <span
              onClick={() =>
                setSavedListSelected(true) || setWorkSelected(false)
              }
            >
              Saved
            </span>
          </li>
          
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !workSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setWorkSelected(false);
                  setSavedListSelected(false);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ProfileNav;
