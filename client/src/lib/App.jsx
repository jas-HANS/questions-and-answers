/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import axios from 'axios';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import QuestionList from '../components/QuestionList.jsx';
// import {getProductQs, addOneQ, addOneA} from './routes.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
    };
    this.getProductQs = this.getProductQs.bind(this);
    this.isHelpfulQ = this.isHelpfulQ.bind(this);
    this.isHelpfulA = this.isHelpfulA.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
  };

  getProductQs() {
    const id = Math.floor(Math.random() * 1000);
    // const id = 5;
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
        .then((res) => {
          this.setState({
            qList: res.data.results,
          }, () => console.log('getProductQs qList:', this.state.qList));
        })
        .catch((err) => console.error(err));
  }

  isHelpfulQ(questID) {
    axios.put(`http://52.26.193.201:3000/qa/question/${questID}/helpful`)
        .then((res) => {
          this.setState({
          });
        })
        .catch((err) => console.error(err));
    console.log('questionID:', questID);
  }

  isHelpfulA(answerID) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerID}/helpful`)
        .then((res) => {
          this.setState({
          });
        })
        .catch((err) => console.error(err));
    console.log('answerID:', answerID);
  }

  reportAnswer(answerID) {
    // to individual answ (isHelpfulA)
    console.log('reportANSW:', answerID);
  }

  render() {
    const {qList} = this.state;
    return (
      <div id="body">
        <Container>
          <br></br>
          <h1 id="header">Questions and Answers</h1>
          <Jumbotron className="jumbotron">
            <div>
            </div>
            <br></br>
            <QuestionList
              qList={qList}
              isHelpfulQ={this.isHelpfulQ}
              isHelpfulA={this.isHelpfulA}
            />
          </Jumbotron>
        </Container>
      </div>
    );
  };
};

export default App;
