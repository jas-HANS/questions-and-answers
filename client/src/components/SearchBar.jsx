import React from 'react';
import {Form, Container} from 'react-bootstrap';

//   // const [] = useState(null);
//   // useEffect(() => {
//   //   function handleStatusChange(status) {}
//   //   return () => {};
//   // });

const SearchBar = (props) => {
  // const [search, setSearch] = useState('');
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Have a question? Search for answers..."
          rows="2" />
      </Form.Group>
    </Container>
  );
};

export default SearchBar;

