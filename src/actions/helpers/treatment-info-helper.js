import axios from 'axios';

const treatmentURL = 'https://levelwater-server.herokuapp.com/treatment';


const treatmentInfoHelper = (treatment_name, treatment_type, critical_to_operations, year_constructed, capacity, condition, callback) => {
  const config = {
    headers: {'token': localStorage.getItem('token')}
  };
  const id = parseInt(localStorage.getItem('water_systems_id'));

  return axios.post(treatmentURL, {
    water_systems_id: id,
    treatment_name: treatment_name,
    treatment_type: treatment_type,
    critical_to_operations: critical_to_operations,
    year_constructed: parseInt(year_constructed),
    capacity: parseInt(capacity),
    condition: condition
  }, config)
  .then((response) => {
    if (response.data.errorMessage) {
      alert('something went wrong');
    }
    else {
      localStorage.setItem('profileStepCompleted', 'treatment');
      callback();
    }
  });
};

export default treatmentInfoHelper;
