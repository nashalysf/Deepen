import React from "react";

const initialList = [
  { id: "a", name: "www.github.com" },
  { id: "b", name: "www.deepen.com" },
  { id: "c", name: "www.youtube.com" },
];

const ListLinks = () => {
  const [list] = React.useState(initialList);

  return (
    <div  class="d-flex justify-content-between">
      <ul id="" class="">
        {list.map((item) => (
          <li class= "toolList" key={item.id}>
            <label>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListLinks;
