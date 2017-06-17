import axios from 'axios';
const distributionURL = 'https://levelwater-server.herokuapp.com/distribution-system';
const algorithmURL = 'https://levelwater-server.herokuapp.com/algorithm-results/';


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
      alert(response.data.error);
      return null;
    }
    localStorage.setItem('profileStepCompleted', 'distribution');
    return axios.post(`${algorithmURL}${id}`, {}, config)
  })
  .then((response) => {
    if(response.data.errorMessage) {
      alert(response.data.error);
    }
    else {
      localStorage.setItem('profileStepCompleted', 'algorithm');
      callback();
    }
  })
  .catch((err) => {
    console.log(err);
  })
};

export default pumpingDistHelper;
