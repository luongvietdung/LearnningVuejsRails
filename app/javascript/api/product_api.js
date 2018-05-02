import axios from 'axios'

export default {
  getProducts(callback) {
    axios.get('/api/products').then(function (response) {
      callback(response.data);
    }).catch(function (error) {
      console.log(error);
    });
}
}