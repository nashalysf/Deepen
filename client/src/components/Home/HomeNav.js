import { React } from "react";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    searchSelected,
    setSearchSelected
  } = props;
  function categorySelected(name) {
    console.log(`${name} is clicked`);
  }
  return (
    <header>
      <nav>
        <ul className="homeNav">
          <li>
          <a data-testid="home" href="#home" onClick={() => setSearchSelected(false)}>Home</a>
          </li>
          <li>
          <span onClick={() => setSearchSelected(true)}>Search</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => {
                setCurrentCategory(category);
                setSearchSelected(false);
              }}>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
