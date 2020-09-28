import React, {useState} from 'react';

const SearchBar = (props) => {
  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState('');
  // // const [questions, setQuestions] = useState([]);
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // useEffect to call the get questions function when the component mounts.
  // useEffect(() => {
  //   getData();
  // }, []);

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
};

export default SearchBar;

// function SearchBar(props) {
//   // const [] = useState(null);
//   // useEffect(() => {
//   //   function handleStatusChange(status) {}
//   //   return () => {};
//   // });

