import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const Helpful = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // handleAddAnswer(e) {
  //   e.preventDefault();
  //   axios.post('http://52.26.193.201:3000/qa/:question_id/answers', {
  //     body: req.body.body,
  //     name: req.body.name,
  //     email: req.body.email,
  //     photos: []
  //   })
  //   .then(() => {
  //     //refresh list
  //   })
  //   .catch(err => console.error(err));
  // }

  return (
    <div>
      <span>
        Helpful?
      </span>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Yes
        {` (${count}) `}
      </button>
      <button
        type="button"
        // onClick={() => ()}
      >
        Add Answer
        {` (${count}) `}
      </button>
    </div>
  );
}

export default Helpful;
