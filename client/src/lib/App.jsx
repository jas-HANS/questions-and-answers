import React from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Question from '../components/Question.jsx';
import axios from 'axios';
// import { getQs, getAs } from './routes.js';
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
        <div>
          <Button variant="primary">MORE ANSWERED QUESTIONS</Button>
          <Button variant="primary">ADD A QUESTION</Button>
        </div>
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
