import React, { useState } from 'react';
import Question from './Question';

const QuestionList = (props) => {
  mappedList = props.list.map(question => <Question
    question={question}
    key={id}/>);

    return (
      <div>
        {mappedList}
      </div>
    );
}

export default QuestionList;