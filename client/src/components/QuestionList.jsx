import React from 'react';
import Question from './Question';

// eslint-disable-next-line react/prop-types
const QuestionList = ({qList}) => {
  // eslint-disable-next-line react/prop-types
  const mappedList = qList.map((quest, i) => <Question
    question={quest}
    key={i}/>);

  return (
    <div className="question-list">
      {mappedList}
    </div>
  );
};

export default QuestionList;
