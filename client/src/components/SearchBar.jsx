import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const SearchBar = ({searchInput, handleSearchChange}) => {
  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Have a question? Search for answers..."
          rows="1"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </Container>
  );
};

export default SearchBar;
