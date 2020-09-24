import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function SearchBar() {
  // initialize 3 states using useState:
  // data: an array which contains the fetched API data. Initialize as empty array.
  // query: the string value in the search bar. Initialize as empty string.
  // questions: an array which contains the questions to output to the list. Initialize as empty array.
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  // const [questions, setQuestions] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // get the questions from the api

  // useEffect to call the get questions function when the component mounts.
  // useEffect(() => {
  //   getData();
  // }, []);

  //   <SearchBar
  //  onChangeText={updateQuery}
  //  value={query}
  //  placeholder="Type Here..."/>

  return (
    <div>
      <input
        type="text"
        placeholder="Have a question? Search for answers..."
        value={search}
        onChange={handleSearch}
      />
       {/* <button>
         {:mag:}
       </button> */}
    </div>
  );
}

export default SearchBar;

// import React, { useState } from 'react';

// function SearchBar(props) {
//   // const [] = useState(null);
//   // useEffect(() => {
//   //   function handleStatusChange(status) {}
//   //   return () => {};
//   // });

//   return (
//     <li style={{ color: isOnline ? 'green' : 'black' }}>
//       {props.friend.name}
//     </li>
//   );
// }
