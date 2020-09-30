import React, {useState} from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';
import AnswerList from './AnswerList.jsx';

//   // const [] = useState(null);
// useEffect(() => {
//   function handleStatusChange(status) {}
//   return () => {};
// });

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  // const filteredItems = items.filter((item) =>
  //   item.body.toLowerCase().includes(search));

  // const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Have a question? Search for answers..."
          rows="2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        {/* {!filteredItems.length && (
          <div>There are no answers that match your criteria</div>
        )} */}
        {/* {itemsToDisplay.map((item) => (
          // map over individual answers?
          <div key={item.title}>
            <Row>A:
              <Col>{answer.body}</Col>
            </Row>
            <Row className="comment-data">by:
              <Col>{`${answer.answerer_name} ${'  '} ${newDate}`}
              </Col>
            </Row>
          </div>
        ))} */}
      </Form.Group>
    </Container>
  );
};

export default SearchBar;

