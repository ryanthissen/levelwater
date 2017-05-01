import axios from 'axios';
import Cookies from 'js-cookie';

const loginURL = 'https://levelwater-server.herokuapp.com/login';


//helper function to make login api calls
function loginUser(email, password, callback) {
  return axios
    .post(loginURL, {
      email: email,
      password: password
    })
    .then((response) => {
      if (response.data.ErrorMessage) {
        alert('bad username or password');
      }
      else {
        console.log('response', response);
        Cookies.set('token', response.data.token);
        let x = Cookies.get('token');
        console.log('x',x);
        callback();
        return response;
        // browserHistory.push('/');
      }
    })
    // .then(() => {
    //   return axios
    //     .get('http://levelwater-server.herokuapp.com/users/1')
    //     .then((response) => {
    //       console.log(response);
    //     });
    // })
    .catch((error) => console.log(error));
}

export default loginUser;

module.exports = loginUser;
