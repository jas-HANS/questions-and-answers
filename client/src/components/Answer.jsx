/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {Row, Col} from 'react-bootstrap';
import HelpfulBtn from './HelpfulBtn.jsx';

const Answer = ({answer, isHelpfulA}) => {
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
  // useeffect for reported
  // const [active, setActive] = useEffect(true);
  const btnRef = useRef();

  const onBtnClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute('disabled', 'disabled');
      setReport(false);
    }
  };

  return (
    <div>
      <Row>A:
        <Col>{answer.body}</Col>
      </Row>
      <Row className="comment-data">by:
        {answer.answerer_name === 'Seller' ?
        <Col className="seller">
          {`${answer.answerer_name.toUpperCase()} ${'  '} ${newDate}`}</Col> : <Col>{`${answer.answerer_name} ${'  '} ${newDate}`}
          </Col>
        }
        <Col md="auto" className="answer-btn">
          <HelpfulBtn
            id={answer.id}
            clickFunc={isHelpfulA}
            currentCount={answer.helpfulness}
          />
          <div
            className="report"
            variant="dark"
            size="sm"
            ref={btnRef}
            onClick={onBtnClick}
          >{report && '  Report'}{!report && '  Reported'}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Answer;
