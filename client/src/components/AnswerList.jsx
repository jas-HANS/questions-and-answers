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
      <div key={i} className="answer-list">
        <Row>A:
          <Col>{answer.body}</Col>
        </Row>
        <Row className="comment-data">by:
          <Col>{`${answer.answerer_name} ${'  '} ${newDate}`}</Col>
          <Col md="auto" id="answer-btn">
            <HelpfulBtn id="answer-btn-1"/>
            <Alert.Link
              className="report"
              variant="dark"
              size="sm"
              onClick={() => setReport(!report)}
            >{report && ' Report'}{!report && ' Reported'}
            </Alert.Link>
          </Col>
        </Row>
      </div>
    );
  });

  const [load, setLoad] = useState(true);

  return (
    <div>
      {mappedList.slice(0, 2)}
      {mappedList.length > 2 ?
      <Accordion>
        <Accordion.Collapse
          eventKey="0">
          <Card.Body>
            {mappedList.slice(2)}
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          onClick={() => setLoad(!load)}
        >
          {load && 'LOAD MORE ANSWERS'}{!load && 'COLLAPSE ANSWERS'}
        </Accordion.Toggle>
      </Accordion> : mappedList}
    </div>
  );
};

export default AnswerList;

// answer component? take in props.answer
