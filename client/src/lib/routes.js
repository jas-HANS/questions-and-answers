import axios from 'axios';

const getQs() {
  axios.get('http://52.26.193.201:3000/qa/:product_id/${num}')
  .then(data => console.log(data))
  .catch(err => console.error(err))
};
// .then(result => {
//   this.setState({
//     list: result.data,
//   });
// })

const getAs() {
  axios.get('http://52.26.193.201:3000/qa/:question_id/answers')
  .then(data => console.log(data))
  .catch(err => console.error(err))
};

export default { getQs, getAs};
