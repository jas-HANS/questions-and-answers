import React, { useState } from 'react';

function Answer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Helpful?
      </p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Yes
        {` (${count}) `}
      </button>
    </div>
  );
}

export default Answer;
