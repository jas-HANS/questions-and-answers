import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const SearchBar = (props) => {

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
    </div>
  );
}

export default SearchBar;

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
