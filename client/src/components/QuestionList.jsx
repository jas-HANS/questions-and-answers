/* eslint-disable max-len */
import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Question from './Question';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList, isHelpfulQ, isHelpfulA, productName, getId, getProductQs}) => {
  const [load, setLoad] = useState(false);
  const [questions, setQuestions] = useState(0);

  const mappedList = qList.map((question, i) => <Question
    question={question}
    key={i}
    isHelpfulQ={isHelpfulQ}
    isHelpfulA={isHelpfulA}
    productName={productName}
    getProductQs={getProductQs}
  />);

  return (
    <div>
      <div className="qa-question-list">
        {/* {mappedList.slice(0, 4)} */}
        {mappedList.slice(0, 4 + questions)}
        {mappedList.length > 4 &&
      <Accordion>
        <Accordion.Collapse
          eventKey="0">
          <div>
            {/* {mappedList.slice(4 + questions)} */}
          </div>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          style={{marginLeft: '5.5%'}}
          variant="outline-dark"
          eventKey="0"
          // onClick={() => setLoad(!load)}
          onClick={() => {
            if (!load) {
              setQuestions(questions + 2);
              if (mappedList.length - 1 <= questions + 5) {
                setLoad(true);
              }
            } else {
              setQuestions(0);
              setLoad(false);
            }
          }}
        >
          {!load && 'LOAD MORE QUESTIONS'}{load && 'COLLAPSE QUESTIONS'}
        </Accordion.Toggle>
      </Accordion>}

        {/* {mappedList.length < 1 &&
      <SubmitButton className="addq-btn-solo"
        productName={productName}
        getId={getId}
        getProductQs={getProductQs}
      />}
      </div>
      <div>
        {mappedList.length > 0 &&
    <><br></br>
      <div>
        <SubmitButton
          className="addq-btn-list"
          productName={productName}
          getId={getId}
          getProductQs={getProductQs}
        />
      </div>
    </>} */}
      </div>
    </div>
  );
};

export default QuestionList;

// return (
//   <div>
//     <div className="question-list">
//     {mappedList.length > 4 ?
//     mappedList.slice(0, 4)
//     <Accordion>
//       <Accordion.Collapse
//         eventKey="0">
//         <div>
//           {mappedList.slice(4)}
//         </div>
//       </Accordion.Collapse>
//       <Accordion.Toggle
//         as={Card.Header}
//         style={{margin: '10px'}}
//         variant="link"
//         eventKey="0"
//         onClick={() => setLoad(!load)}
//       >
//         {load && 'LOAD MORE QUESTIONS'}{!load && 'COLLAPSE QUESTIONS'}
//       </Accordion.Toggle>
//     </Accordion>
//     : mappedList}
