/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import axios from 'axios';
import query from './routes';
import Container from 'react-bootstrap/Container';
import QuestionList from '../components/QuestionList.jsx';
import SearchBar from '../components/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
      searchInput: '',
      productName: '',
      // getId: Math.floor(Math.random() * 100), 5/6
      getId: 1300,
    };
    this.isHelpfulQ = this.isHelpfulQ.bind(this);
    this.isHelpfulA = this.isHelpfulA.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.productName = this.productName.bind(this);
    this.getProductQs = this.getProductQs.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
    this.productName();
  };

  getProductQs() {
    const getId = this.state.getId;
    query.reqProductQs(getId, (err, data) => {
      if (err) {
        throw err;
      } else {
        this.setState({qList: data.data.results});
      }
    });
  }

  productName() {
    const getId = this.state.getId;
    axios.get(`http://52.26.193.201:3000/products/${getId}`)
        .then((res) => {
          this.setState({productName: res.data.name});
        })
        .catch((err) => console.error(err));
  }

  isHelpfulQ(questID) {
    axios.put(`http://52.26.193.201:3000/qa/question/${questID}/helpful`)
        .then((res) => {
          console.log(res);
          this.setState();
        })
        .catch((err) => console.error(err));
    console.log('questionID:', questID);
    // query.reqIsHelpfulQ(questID, (err, data) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     this.setState({});
    //   }
    // });
  }

  isHelpfulA(answerID) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerID}/helpful`)
        .then((res) => {
          this.setState({});
        })
        .catch((err) => console.error(err));
    console.log('answerID:', answerID);
    // query.reqIsHelpfulA(answerID, (err, data) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     this.setState({});
    //   }
    // });
  }

  handleSearchChange(e) {
    this.setState({searchInput: e.target.value.toLowerCase()});
  }

  render() {
    const {qList, searchInput, productName, getId} = this.state;
    let filteredQuestions;
    searchInput.length >= 3 ?
       filteredQuestions = qList.filter((q) => q.question_body.toLowerCase().includes(searchInput.toLowerCase())) : filteredQuestions = qList;
    return (
      <div>
        <Container>
          <br></br>
          <div className="jumbotron">
            <h1>Questions and Answers</h1>
            <br></br>
            <SearchBar
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
              productName={productName}

              getId={getId}
              getProductQs={this.getProductQs}
            />
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
