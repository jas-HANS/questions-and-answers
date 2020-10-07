/* eslint-disable max-len */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerList from './AnswerList.jsx';
import HelpfulBtn from './HelpfulBtn.jsx';
import AddAnswerBtnM from './AddAnswerBtnM.jsx';

const Question = ({question, isHelpfulA, isHelpfulQ, productName, getProductQs}) => {
  const sortedAnswers = Object.values(question.answers).sort((a, b) => {
    if (b.answerer_name === 'SELLER' || b.answerer_name === 'Seller' || b.answerer_name === 'seller' ) {
      return 1;
    } else if (a.answerer_name === 'SELLER' || a.answerer_name === 'Seller' || a.answerer_name === 'seller' ) {
      return - 1;
    } else {
      return b.helpfulness - a.helpfulness;
    }
  });

  return (
    <div>
      <Row className="qa-question">Q:
        <Col>{question.question_body}</Col>
        <Col md="auto">
          <HelpfulBtn
            className="q-btn"
            id={question.question_id}
            currentCount={question.question_helpfulness}
            clickFunc={isHelpfulQ}/>
          <AddAnswerBtnM
            productName={productName}
            question={question}
            getProductQs={getProductQs}
            answers={sortedAnswers}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <AnswerList
            answers={sortedAnswers}
            isHelpfulA={isHelpfulA}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Question;
