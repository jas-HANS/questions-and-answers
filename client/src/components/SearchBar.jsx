import React from 'react';
import {Form, Container} from 'react-bootstrap';

const SearchBar = ({searchInput, handleSearchChange}) => {
  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Have a question? Search for answers..."
          rows="2"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </Container>
  );
};

export default SearchBar;
