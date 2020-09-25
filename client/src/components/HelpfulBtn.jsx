import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Helpful = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // handleAddAnswer(e) {
  //   e.preventDefault();
  //   axios.post('http://52.26.193.201:3000/qa/:question_id/answers', {
  //     body: req.body.body,
  //     name: req.body.name,
  //     email: req.body.email,
  //     photos: []
  //   })
  //   .then(() => {
  //     //refresh list
  //   })
  //   .catch(err => console.error(err));
  // }

  return (
    <div>
      <Row>
        <Col>
         <span>
          Helpful?
         </span>
        </Col>
        <Col>
         <Button
          variant="dark"
          size="sm"
          onClick={() => setCount(count + 1)}
         >
          Yes{`(${count})`}
         </Button>
        </Col>
        <Col>
         <Button
          variant="dark"
          size="sm"
         //  onClick={() => setCount(count + 1)}
         >Add Answer
         </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Helpful;
