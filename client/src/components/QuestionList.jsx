import React from 'react';
import Question from './Question';

const QuestionList = ({qList}) => {
  let mappedList = qList.map((quest, i) => <Question
    question={quest}
    key={i}/>);

    return (
      <div className="questionList">
        {mappedList}
      </div>
    );
}

export default QuestionList;