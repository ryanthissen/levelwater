import axios from 'axios';
const treatmentURL = 'http://levelwater-server.herokuapp.com/treatment';

const treatmentInfoHelper = (water_systems_id, treatment_name, treatment_type, critical_to_operations, year_constructed, capacity, condition, callback) => {
  return axios
    .post(treatmentURL, {
      water_systems_id: water_systems_id,
      treatment_name: treatment_name,
      treatment_type: treatment_type,
      critical_to_operations: critical_to_operations,
      year_constructed: year_constructed,
      capacity: capacity,
      condition: condition,
    })
    .then((response) => {
      if (response.data.errorMessage) {
        console.log('response', response);
        alert('something went wrong');
      }
      else {
        console.log('response', response);
        callback();
      }
    });
};

export default treatmentInfoHelper;
