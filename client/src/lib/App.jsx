import React from 'react';
import SearchBar from './components/SearchBar.jsx';

const App = () => (
  <div>
    <h1 id="test">Questions and Answers</h1>
    <input
        type="text"
        placeholder="Have a question? Search for answers..."
        value={search}
        onChange={handleSearch}
      />
       <button>
         {:mag:}
       </button>
  </div>
);

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//     };
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <div>
//         <h1 id="test">Qusetions and Answers</h1>
{ /* <SearchBar
 onChangeText={updateQuery}
 value={query}
 placeholder="Type Here..."/> */ }
//       </div>
//     );
//   }
// }
