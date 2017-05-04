import axios from 'axios';
const distributionURL = 'http://levelwater-server.herokuapp.com/distribution-system';
const algorithmURL = 'http://levelwater-server.herokuapp.com/algorithm-results/';


const pumpingDistHelper = (total_length_miles, average_age_of_pipes, average_main_diameter_inches, condition, callback) => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };
  let id = parseInt(localStorage.getItem('water_systems_id'));

  console.log('body', {
    water_systems_id: id,
    total_length_miles: parseInt(total_length_miles),
    average_age_of_pipes: parseInt(average_age_of_pipes),
    average_main_diameter_inches: average_main_diameter_inches,
    conditon: condition
  }, config);

  return axios
    .post(distributionURL, {
      water_systems_id: id,
      total_length_miles: parseInt(total_length_miles),
      average_age_of_pipes: parseInt(average_age_of_pipes),
      average_main_diameter_inches: average_main_diameter_inches,
      condition: condition
    }, config)
    .then((response) => {
      if (response.data.errorMessage) {
        console.log('response', response);
        alert(response.data.error);
        return null;
      }

      return axios
        .post(`${algorithmURL}${id}`, {}, config)
        .then((response) => {
          if(response.data.errorMessage) {
            console.log('response', response);
            alert(response.data.error);
          }
          else {
            console.log('response', JSON.parse(response.data.algorithm_results));
            callback();
          }
        });
    });
};

export default pumpingDistHelper;
