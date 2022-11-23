import React, { useState } from "react";
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

function Search({ currentCategory }) {

  const [formState, setFormState] = useState({ search: "" });
  const { search } = formState;

  function handleChange(e) {
    setFormState({ ...formState, search: e.target.value });
  }

  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <main>
      <div className="SearchBar">
        <input type="text" name="search" defaultValue={search} onBlur={handleChange}/>
        <button type="search" className="searchBtn">
        ∙
        </button>
      </div>
      
    </main>
  );
}

export default Search;
