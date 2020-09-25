import React from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Question from '../components/Question.jsx';
import axios from 'axios';
// import { getQs, getAs } from './routes.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qList: []
    };
  }

  render() {
    return (
    <div>
      <Row>
        <Col xs={0} sm={2} />
        <Col xs={12} sm={8} className="test"></Col>
        <Col xs={0} sm={2} />
      </Row>
      <Container>
      <h1 id="header">Questions and Answers</h1>
        <Jumbotron>
          <Question/>
        </Jumbotron>
        <div>
          <Button variant="dark" size="sm">MORE ANSWERED QUESTIONS</Button>
          <Button variant="dark" size="sm">ADD A QUESTION</Button>
        </div>
      </Container>
    </div>
    );
  }
  }

export default App;
