import React from 'react';
import HelpfulBtn from './HelpfulBtn.jsx';
import {Col, Row, Container} from 'react-bootstrap'

const AnswerList = ({answers}) => {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let mappedList = answers.map((answer, i) => {
    let newDate;
    let d = new Date(answer.date);
    let year = d.getUTCFullYear();
    let monthId = d.getUTCMonth();
    let month = months[monthId];
    let day = d.getUTCDate();
    month = month.slice(0, 3);
    newDate = `${month} ${day}, ${year}`;

    return (
      <Container className="answer-list">
        A: {answer.body}
        <Row className="answer-n-d">
          <Col>
            by: {answer.answerer_name}
          </Col>
          <Col xs={8}>
            {newDate}
          </Col>
          <Col className="answer-helpfulbtn">
            <HelpfulBtn />
          </Col>
        </Row>
      </Container>
     )
   });

  return (
    <div>
      {mappedList}
    </div>
  );
}

export default AnswerList

// answer component? take in props.answer