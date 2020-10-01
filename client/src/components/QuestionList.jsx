/* eslint-disable max-len */
import React, {useState} from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import Question from './Question';
import SubmitQuestion from './SubmitQuestion';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList, isHelpfulQ, isHelpfulA}) => {
  const mappedList = qList.map((quest, i) => <Question
    question={quest}
    key={i}
    isHelpfulQ={isHelpfulQ}
    isHelpfulA={isHelpfulA}
  />);

  const [load, setLoad] = useState(true);

  const [isModal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!isModal);
  };

  return (
    <div>
      <div className="question-list">
        {mappedList.slice(0, 4)}
        {mappedList.length > 4 &&
        <Accordion>
          <Accordion.Collapse
            eventKey="0">
            <div>
              {mappedList.slice(4)}
            </div>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            style={{margin: '10px'}}
            variant="link"
            eventKey="0"
            onClick={() => setLoad(!load)}
          >
            {load && 'LOAD MORE QUESTIONS'}{!load && 'COLLAPSE QUESTIONS'}
          </Accordion.Toggle>
        </Accordion>}

        {mappedList.length < 1 &&
        <Button id="addq-btn-solo" variant="secondary" size="lg">ADD A QUESTION</Button>}
      </div>
      <div>
        {mappedList.length > 0 &&
      <><br></br><Button id="addq-btn"variant="secondary" size="sm"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >ADD A QUESTION</Button>
      </>}
        <SubmitQuestion/>
      </div>
    </div>
  );
};

export default QuestionList;
