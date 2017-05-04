import axios from 'axios';
const loginURL = 'http://levelwater-server.herokuapp.com/login';


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
        console.log('response', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('water_systems_id', response.data.water_systems_id);
        callback();
      }
    })
    .catch((error) => console.log(error));
}

export default loginUser;

module.exports = loginUser;
