import axios from 'axios';

// gets all Qs for one product
const getProductQs = (cb) => {
  const id = Math.floor(Math.random() * 1000);
  axios.get(`http://52.26.193.201:3000/qa/${id}`)
      .then((data) => cb(null, data))
      .catch((err) => cb(err, null));
};

// // mark a question as helpful
const qIsHelpful = (cb) => {
  axios.put(`http://52.26.193.201:3000/qa/question/${id}/helpful`)
      .then((data) => cb(null, data))
      .catch((err) => cb(err, null));
};

// // report a question
// const reportQuestion = (cb) => {
//   let id = 5;
//   axios.put(`http://52.26.193.201:3000/qa/question/${id}/report`)
//   .then(data => cb(null, data))
//   .catch(err => cb(err, null))
// }

// add a question for one product
// const addOneQ = (cb, id) => {
//   axios.post(`http://52.26.193.201:3000/qa/${id}`)
//       .then((data) => cb(null, data))
//       .catch((err) => cb(err, null));
// };

// add an answer for one product
// const addOneA = (cb, id) => {
//   axios.post(`http://52.26.193.201:3000/qa/${id}/answers`)
//       .then((data) => cb(null, data))
//       .catch((err) => cb(err, null));
// };

// returns all answers for one question
// const getOneQsAs = (cb) => {
//   let id = 5;
//   axios.get(`http://52.26.193.201:3000/qa/${id}/answers`)
//   .then(data => cb(null, data))
//   .catch(err => cb(err, null))
// };

// // mark an answer as helpful
// const aIsHelful = (cb) => {
//   axios.put(`http://52.26.193.201:3000/qa/answer/${id}/helpful`)
//   .then(data => cb(null, data))
//   .catch(err => cb(err, null))
// }

// // report an answer
// const reportAnswer = (cb) => {
//   let id = 5;
//   axios.put(`http://52.26.193.201:3000/qa/question/${id}/report`)
//   .then(data => cb(null, data))
//   .catch(err => cb(err, null))
// }

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

export {getProductQs, qIsHelpful};
