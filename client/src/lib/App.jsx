import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Question from '../components/Question.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: {results: [{}]},
      allAsForOneQ: [],
    };
    this.getProductQs = this.getProductQs.bind(this);
    this.getOneQsAs = this.getOneQsAs.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
    this.getOneQsAs();
  };

  getProductQs() {
    let id = 5;
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
      .then(res => {
        // console.log("Get prod Qs:", res.data.results);
        this.setState({
          qList: res.data,
          oneQ: res.data.results.body
        }, () => console.log("second arg:", this.state.qList));
      })
      .catch(err => console.error(err))
  }

   getOneQsAs() {
    let id = 5;
    axios.get(`http://52.26.193.201:3000/qa/${id}/answers`)
    .then(res => {
      console.log("Get one qs Answrs:", res.data.results);
      this.setState({
        allAsForOneQ: res.data
      }, () => console.log("in getOneA:", this.state.allAsForOneQ));
    })
    .catch(err => console.error(err))
  };

  render() {
    let { qList, allAsForOneQ } = this.state;
    // console.log("in render", this.state.qList)
    return (
    <div>
      <Row>
        <Col xs={0} sm={2} />
        <Col xs={12} sm={8} className="test"></Col>
        <Col xs={0} sm={2} />
      </Row>
      <Container>
      <h1 id="header">Questions and Answers</h1>
        <Jumbotron>
          <Question
           qList={qList}
           allAsForOneQ={allAsForOneQ}
          />
        </Jumbotron>
        <div>
          <Button variant="dark" size="sm">MORE ANSWERED QUESTIONS</Button>
          <Button variant="dark" size="sm">ADD A QUESTION</Button>
        </div>
      </Container>
    </div>
    );
  }
  }

export default App;
