import axios from 'axios';
const distributionURL = 'http://levelwater-server.herokuapp.com/distribution-system';

let config = {
  headers: {'token': localStorage.getItem('token')}
};

let id = parseInt(localStorage.getItem('water_systems_id'));

const pumpingDistHelper = (total_length_miles, average_age_of_pipes, average_main_diameter_inches, callback) => {
  console.log('id', id);
  console.log('body', {
    water_systems_id: id,
    total_length_miles: parseInt(total_length_miles),
    average_age_of_pipes: parseInt(average_age_of_pipes),
    average_main_diameter_inches: parseInt(average_main_diameter_inches)
  });
  return axios
    .post(distributionURL, {
      water_systems_id: id,
      total_length_miles: total_length_miles,
      average_age_of_pipes: average_age_of_pipes,
      average_main_diameter_inches: average_main_diameter_inches
    }, config)
    .then((response) => {
      if (response.data.errorMessage) {
        console.log('response', response);
        alert('something went wrong.');
      }
      else {
        console.log('response', response);
        callback();
      }
    });
};

export default pumpingDistHelper;
