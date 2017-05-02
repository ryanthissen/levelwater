import axios from 'axios';
const sourcesURL = 'http://levelwater-server.herokuapp.com/sources';

let config = {
  headers: {'token': localStorage.getItem('token')}
};


const sourceInfoHelper = (water_systems_id, source_name, source_type, treatment, critical_to_operations, year_constructed, capacity, condition, continuous_chlorination, callback) => {
  return axios
    .post(sourcesURL, {
      water_systems_id: water_systems_id,
      source_name: source_name,
      source_type: source_type,
      treatment: treatment,
      critical_to_operations: critical_to_operations,
      year_constructed: year_constructed,
      capacity: capacity,
      condition: condition,
      continuous_chlorination: continuous_chlorination,
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

export default sourceInfoHelper;
