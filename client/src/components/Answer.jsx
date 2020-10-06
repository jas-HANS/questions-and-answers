/* eslint-disable max-len */
import React, {useState} from 'react';
import axios from 'axios';
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

  const [report, setReport] = useState(false);
  // Keeping useRef comments for future reference //
  // const btnRef = useRef(); // useRef
  // const onBtnClick = (e) => {
  //   if (btnRef.current) {
  //     btnRef.current.setAttribute('disabled', 'disabled');
  //     setReport(false);
  //     // reportAns();
  //   }
  // };

  const reportAns = (e) => {
    e.preventDefault();
    axios.put(`http://52.26.193.201:3000/qa/answer/${answer.id}/helpful`)
        .then((res) => {
          setReport(!report);
          console.log(res);
        })
        .catch((err) => console.error(err));
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
            // ref={btnRef}
            onClick={!report ? reportAns : null}
          >{report && '  ' + 'Reported'}{!report && '  ' + 'Report'}
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
