import { React } from "react";
//This component is used to navigate tabs in the home page
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    setSearchSelected
  } = props;

  return (
    <header>
      <nav>
        <ul className="homeNav">
          <li>
          <a data-testid="home" href=" " onClick={() => setSearchSelected(false)}>Home</a>
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
