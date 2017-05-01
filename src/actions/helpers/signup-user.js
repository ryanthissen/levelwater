import axios from 'axios';
import Cookies from 'js-cookie';

const signupURL = 'http://levelwater-server.herokuapp.com/users';

function signupUser(email, firstName, lastName, password, passwordConfirm, callback) {
  if (password !== passwordConfirm) {
    alert('Your passwords do not match!');
  }

  else {
    return axios
      .post(signupURL, {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName
      })
      .then((response) => {
        if(response.data.errorMessage) {
          alert(response.data.errorMessage);
        }
        else {
          console.log('response', response);
          // Cookies.set('token', response.data.token);
          // let x = Cookies.get('token');
          // console.log('x', x);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('water_systems_id', response.data.user.water_systems_id);
          callback();
        }
      })
      .catch((error) => console.log(error));
  }
}

export default signupUser;
