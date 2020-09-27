/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import axios from 'axios';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import QuestionList from '../components/QuestionList.jsx';
// import SearchBar from '../components/QuestionList.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
      // allAsForOneQ: [],
    };
    this.getProductQs = this.getProductQs.bind(this);
    // this.getAllAsForOneQ = this.getAllAsForOneQ.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
  };

  getProductQs() {
    const id = Math.floor(Math.random() * 1000);
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
        .then((res) => {
          this.setState({
            qList: res.data.results,
          }, () => console.log('getProductQs qList:', this.state.qList));
        })
        .catch((err) => console.error(err));
  }

  // getAllAsForOneQ() {
  //   const id = 35556;
  //   axios.get(`http://52.26.193.201:3000/qa/${id}/answers`)
  //       .then((res) => {
  //         this.setState({
  //           allAsForOneQ: res.data,
  //         });
  //       })
  //       .catch((err) => console.error(err));
  // };
  // helpful? selectively target the answer that was rated.

  render() {
    const {qList} = this.state;
    return (
      <div id="body">
        <Container>
          <h1 id="header">Questions and Answers</h1>
          <Jumbotron className="jumbotron">
            <div>
              <input
                className="search"
                type="text"
                placeholder="Have a question? Search for answers..."
              />
            </div>
            <br></br>
            <QuestionList
              qList={qList}
              // allAsForOneQ={allAsForOneQ}
            />
          </Jumbotron>
          <div>
            <Button variant="secondary" size="sm">MORE ANSWERED QUESTIONS</Button>
            <Button variant="secondary" size="sm">ADD A QUESTION</Button>
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
