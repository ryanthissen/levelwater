import axios from 'axios';
import Cookies from 'js-cookie';

const signupURL = 'http://levelwater-server.herokuapp.com/users';

function signupUser(email, firstName, lastName, password, callback) {
  return axios
    .post(signupURL, {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName
    })
    .then((response) => {
      if(response.data.errorMessage) {
        alert('Something Went Wrong, Please Try Again');
      }
      else {
        console.log('response', response);
        Cookies.set('token', response.data.token);
        let x = Cookies.get('token');
        console.log('x', x);
        callback();
      }
    })
    .catch((error) => console.log(error));
}

export default signupUser;
