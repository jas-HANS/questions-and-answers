import React, {useState, useEffect} from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';
// import Question from './Question';
import QuestionList from './QuestionList';

// search the list of questions, in hopes of finding your answer
const SearchBar = ({qList}) => {
  console.log('qList:', qList);

  const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  // useEffect(() => {
  //   const results = qList.filter((q) =>
  //     q.question_body.toLowerCase().includes(search),
  //   );
  //   setSearchResults(results);
  // }, [search]);
  const results = !search ? qList : qList.filter((q) =>
    q.question_body.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Have a question? Search for answers..."
          rows="2"
          value={search}
          onChange={handleSearchChange}
        />
        {/* {!searchResults.length && (
          <div>There are no answers that match your criteria</div>
        )} */}
        {results.map((item) => (
          // map over individual answer/question?
          <div key={item.title}>
            <Row>Q:
              <Col>{item.question_body}</Col>
            </Row>
          </div>
        ))}
      </Form.Group>
    </Container>
  );
};

export default SearchBar;

