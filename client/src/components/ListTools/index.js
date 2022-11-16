import React from "react";

const initialList = [
  { id: "a", name: " React" },
  { id: "b", name: " Firebase" },
  { id: "c", name: " GraphQL" },
  { id: "d", name: " JXT" },
  { id: "e", name: " JavaScript" },
  { id: "f", name: " JAVA" },
];

const ListTools = () => {
  const [list] = React.useState(initialList);

  return (
    <div  class="d-flex justify-content-between">
      <ul id="" class="">
        {list.map((item) => (
          <li  class= "toolList" key={item.id}>
            <label>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTools;
