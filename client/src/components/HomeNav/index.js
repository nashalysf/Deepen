import { React } from "react";

function Nav() {
  const categories = [
    {
      name: "Home",
    },
    {
      name: "Following",
    },
    {
      name: "Search",
    },
<<<<<<< HEAD
=======
  
>>>>>>> b11178a88e67febf40216dc8fa29aee0ab781528
  ];
  function categorySelected(name) {
    console.log(`${name} is clicked`);
  }
  return (
    <header>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
