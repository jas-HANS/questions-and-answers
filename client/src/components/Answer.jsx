import React, {useState} from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import HelpfulBtn from './HelpfulBtn.jsx';

const Answer = ({answer}) => {
  // eslint-disable-next-line max-len
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(answer.date);
  console.log(answer.date);
  const year = d.getUTCFullYear();
  const monthId = d.getUTCMonth();
  let month = months[monthId];
  const day = d.getUTCDate();
  month = month.slice(0, 3);
  const newDate = `${month} ${day}, ${year}`;
  const [report, setReport] = useState(true);


  return (
    <div>
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
};

export default Answer;
