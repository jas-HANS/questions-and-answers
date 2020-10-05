/* eslint-disable max-len */
import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Question from './Question';
import SubmitButton from './SubmitButton.jsx';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList, isHelpfulQ, isHelpfulA, productName, getId, getProductQs}) => {
  const [load, setLoad] = useState(true);
  // const [productName, setProductName] = useState('');

  const mappedList = qList.map((question, i) => <Question
    question={question}
    key={i}
    isHelpfulQ={isHelpfulQ}
    isHelpfulA={isHelpfulA}
    // getId={getId}
    productName={productName}
    getProductQs={getProductQs}
  />);

  return (
    <div>
      <div className="question-list">
        {mappedList.slice(0, 4)}
        {mappedList.length > 3 &&
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
          productName={productName}
          getId={getId}
          getProductQs={getProductQs}
        />
      </div>
    </>}
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


