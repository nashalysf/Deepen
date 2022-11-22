import React from "react";

const ProfileNav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    aboutSelected,
    setAboutSelected
  } = props;


  return (
    <header>
       <nav>
    <ul className="nav">
        <li>
        <a href="#work" className="mx-2" onClick={() => setAboutSelected(false)}>Work</a>
      </li>
      <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
      <span onClick={() => setAboutSelected(true)}>About</span>
      </li>
      {categories.map((category) => (
        <li
          className={`mx-1 ${
            currentCategory.name === category.name && !aboutSelected && 'navActive'
            }`}
          key={category.name}

        >
          <span onClick={() => {
                  setCurrentCategory(category);
                  setAboutSelected(false);
                }}>
          </span>
        </li>
      ))}

    </ul>
  </nav>
    </header>
  );
};

export default ProfileNav;
