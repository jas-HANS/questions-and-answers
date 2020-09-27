/* eslint-disable max-len */
import React, {useState} from 'react';
import HelpfulBtn from './HelpfulBtn.jsx';
import {Accordion, Alert, Button, Card, Col, Row, Container} from 'react-bootstrap';

const AnswerList = ({answers}) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const mappedList = answers.map((answer, i) => {
    const d = new Date(answer.date);
    const year = d.getUTCFullYear();
    const monthId = d.getUTCMonth();
    let month = months[monthId];
    const day = d.getUTCDate();
    month = month.slice(0, 3);
    const newDate = `${month} ${day}, ${year}`;

    const [report, setReport] = useState(true);

    return (
      <Container key={i} className="answer-list">
        <Row> A: {answer.body}</Row>
        <Row s={1} md={4} lg={6}className="answer-n-d">
          <Col>
            by: {answer.answerer_name}
          </Col>
          <Col>
            {newDate}
          </Col>
          <Col id="report">
            <HelpfulBtn />
          </Col>
          <Col>
            <Alert.Link
              className="report"
              variant="dark"
              size="sm"
              onClick={() => setReport(!report)}
            >
              {report && 'Report'}
              {!report && 'Reported'}
            </Alert.Link>
          </Col>
        </Row>
      </Container>

    );
  });

  return (
    <div>
      {mappedList.slice(0, 2)}
      {mappedList.length > 2 ?
      <Accordion>
        <Accordion.Collapse
          eventKey="0">
          <Card.Body>
            <Row>
              {mappedList.slice(2)}
            </Row>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0">
          LOAD MORE ANSWERS
        </Accordion.Toggle>
      </Accordion> : mappedList}
    </div>
  );
};

export default AnswerList;

// answer component? take in props.answer
