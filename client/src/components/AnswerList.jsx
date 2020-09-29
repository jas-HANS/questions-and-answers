/* eslint-disable max-len */
import React from 'react';
import HelpfulBtn from './HelpfulBtn.jsx';
import {Alert, Col, Row, Container} from 'react-bootstrap';

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

    return (
      <Container key={i} className="answer-list">
         A: {answer.body}
        <Row s={1} md={6} lg={6}className="answer-n-d">
          <Col>
            by: {answer.answerer_name}
          </Col>
          <Col>
            {newDate}
          </Col>
          <Col id="report">
            <HelpfulBtn />
            <Alert.Link
              className="report"
              variant="dark"
              size="sm"
              //  onClick={() => setCount(count + 1)}
            >Report
            </Alert.Link>
          </Col>
        </Row>
      </Container>

    );
  });

  return (
    <div>
      {mappedList}
    </div>
  );
};

export default AnswerList;

// answer component? take in props.answer
