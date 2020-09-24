import axios from 'axios';

const getQandA() {
  axios.get('http://52.26.193.201:3000/qa/:product_id')
  .then(data => console.log(data))
  .catch(err => console.error(err))
};

export default getQandA;
