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
    document.title = "Profile";
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
      <nav className="text-allign">
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
          <a
              data-testid="work"
              href="#work"
              onClick={() =>
                setSavedListSelected(false) || setWorkSelected(false)
              }
            >Work </a>
          </li>
          <li className={`mx-2 ${savedListSelected && "navActive"}`}>
          <a
              data-testid="saved"
              href="#saved"
              onClick={() =>
                setSavedListSelected(false) || setWorkSelected(false)
              }
            >Saved </a>
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
