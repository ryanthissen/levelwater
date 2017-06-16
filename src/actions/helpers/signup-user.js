import axios from 'axios';

const signupURL = 'https://levelwater-server.herokuapp.com/users';

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
        if(response.data.ErrorMessage) {
          alert(response.data.ErrorMessage);
        }
        else {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('water_systems_id', response.data.water_systems_id);
          callback();
        }
      })
      .catch((error) => console.log(error));
  }
}

export default signupUser;
