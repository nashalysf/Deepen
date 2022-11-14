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
  const { name } = currentCategory;
  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;

  function handleChange(e) {
    setSearchInput({ ...searchInput, search: e.target.value });
  }

  console.log(searchInput);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchInput);
  }

  return (
    <section>
      <Container>
        <h1 data-testid="h1tag">{name}</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs={12} md={8}>
              <Form.Control
                name="searchInput"
                value={searchInput}
                type="text"
                size="lg"
                placeholder="Search for a projects or users"
                className="SearchBar"
                defaultValue={search}
                onBlur={handleChange}
              />
            </Col>

            <Col xs={12} md={4}>
    
              <Button type="submit" className="searchBtn">
                🔎
              </Button>
            </Col>
          </Form.Row>
        </form>
      </Container>
    </section>
  );
}

export default Search;
