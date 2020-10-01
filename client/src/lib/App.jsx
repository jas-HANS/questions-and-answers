/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import axios from 'axios';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import QuestionList from '../components/QuestionList.jsx';
import SearchBar from '../components/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
      searchInput: '',
    };
    this.getProductQs = this.getProductQs.bind(this);
    this.isHelpfulQ = this.isHelpfulQ.bind(this);
    this.isHelpfulA = this.isHelpfulA.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
  };

  getProductQs() {
    const id = Math.floor(Math.random() * 1000);
    // const id = 6;
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
          this.setState({});
        })
        .catch((err) => console.error(err));
    console.log('questionID:', questID);
  }


  isHelpfulA(answerID) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerID}/helpful`)
        .then((res) => {
          this.setState({});
        })
        .catch((err) => console.error(err));
    console.log('answerID:', answerID);
  }

  reportAnswer(answerID) {
    // pass to individual answer (isHelpfulA)
    console.log('reportANSW:', answerID);
  }

  handleSearchChange(e) {
    this.setState({searchInput: e.target.value.toLowerCase()});
  }

  render() {
    const {qList, searchInput} = this.state;
    const filteredQuestions = qList.filter((q) => q.question_body.toLowerCase().includes(searchInput.toLowerCase()));
    return (
      <div id="body">
        <Container>
          <br></br>
          <div className="jumbotron">
            <h1 id="header">Questions and Answers</h1>
            <br></br>
            <SearchBar
              qList={qList}
              searchInput={searchInput}
              handleSearchChange={this.handleSearchChange}
            />
            <div>
            </div>
            <br></br>
            <QuestionList
              qList={filteredQuestions}
              isHelpfulQ={this.isHelpfulQ}
              isHelpfulA={this.isHelpfulA}
            />
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
