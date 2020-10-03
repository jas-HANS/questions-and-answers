/* eslint-disable max-len */
import React, {useState, useRef} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelpfulBtn from './HelpfulBtn.jsx';
import AnswerPhoto from './AnswerPhoto.jsx';

const Answer = ({answer, isHelpfulA}) => {
  // eslint-disable-next-line max-len
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(answer.date);
  const year = d.getUTCFullYear();
  const monthId = d.getUTCMonth();
  let month = months[monthId];
  const day = d.getUTCDate();
  month = month.slice(0, 3);
  const newDate = `${month} ${day}, ${year}`;

  const [report, setReport] = useState(true);
  const btnRef = useRef();

  const onBtnClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute('disabled', 'disabled');
      setReport(false);
    }
  };

  return (
    <div className="one-answer">
      <Row>A:
        <Col>{answer.body}</Col>
      </Row>
      <Row className="comment-data">by:
        {answer.answerer_name === 'Seller' || answer.answerer_name === 'seller'?
        <Col className="seller" style={{paddingTop: '4px'}}>
          {`${answer.answerer_name.toUpperCase()} ${' | '} ${newDate}`}</Col> : <Col>{`${answer.answerer_name} ${' | '} ${newDate}`}
          </Col>
        }
        <Col md="auto" className="answer-btn">
          <HelpfulBtn
            className="a-btn"
            id={answer.id}
            clickFunc={isHelpfulA}
            currentCount={answer.helpfulness}
          />
          <div
            className="report"
            ref={btnRef}
            onClick={onBtnClick}
          >{report && '  ' + 'Report'}{!report && '  ' + 'Reported'}
          </div>
        </Col>
      </Row>
      <Row>
        <AnswerPhoto
          answer={answer}
        />
      </Row>
    </div>
  );
};

export default Answer;
