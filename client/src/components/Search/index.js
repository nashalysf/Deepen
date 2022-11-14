import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

function Search({ currentCategory }){
    const { name } = currentCategory;
    const [searchInput, setSearchInput] = useState('');
    
    return (
    <section>
        <Container>
        <h1 data-testid="h1tag">{name}</h1>
    <form id="contact-form" >
    <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a projects or users'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit'>
                 Search
                </Button>
              </Col>
            </Form.Row>
    </form>
    </Container>

  </section>
  )
}

export default Search;