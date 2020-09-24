import React from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Question from '../components/Question.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Row>
      <Col xs={0} sm={2} />
      <Col xs={12} sm={8} className="test"></Col>
      <Col xs={0} sm={2} />
    </Row>
    <Container>
    <h1 id="header">Questions and Answers</h1>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Question/>
    </Container>

    <div id ="searchbar"></div>
    <div id="qabox"></div>
    <div id="more-answers"></div>
    <div id="addq"></div>
  </div>
);

export default App;
