/* eslint-disable max-len */
import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Question from './Question';
import SubmitButton from './SubmitButton.jsx';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList, isHelpfulQ, isHelpfulA}) => {
  const mappedList = qList.map((quest, i) => <Question
    question={quest}
    key={i}
    isHelpfulQ={isHelpfulQ}
    isHelpfulA={isHelpfulA}
  />);

  const [load, setLoad] = useState(true);

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
        <SubmitButton className="addq-btn-solo"/>}
      </div>
      <div>
        {mappedList.length > 0 &&
      <><br></br>
        <div>
          <SubmitButton/>
        </div>
      </>}
      </div>
    </div>
  );
};

export default QuestionList;
