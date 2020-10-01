import React, {useState} from 'react';
import {Figure} from 'react-bootstrap';

const AnswerPhoto = ({answers}) => {
  // eslint-disable-next-line max-len
  const mappedPhotos = answers.answer.photos.length ? answer.photos.map((photo, i) =>
    <div key={i}>
      <Figure>
        <Figure.Image
          width={100}
          height={100}
          style={{padding: '4px', borderRadius: '8px', cursor: 'pointer'}}
          alt="user img of product"
          src={photo}
        />
      </Figure>
      <br></br>
    </div> ) : '';

  return (
    <div>
      {mappedPhotos}
    </div>
  );
};

export default AnswerPhoto;
