import axios from 'axios';

const storageURL = 'https://levelwater-server.herokuapp.com/storage-reservoirs';


const storageInfoHelper = (reservoir_type, reservoir_name, year_constructed, capacity, condition, critical_to_operations, callback) => {

  const config = {
    headers: {'token': localStorage.getItem('token')}
  };
  
  let id = parseInt(localStorage.getItem('water_systems_id'));

  return axios.post(storageURL, {
    water_systems_id: id,
    reservoir_type: reservoir_type,
    reservoir_name: reservoir_name,
    year_constructed: parseInt(year_constructed),
    capacity: parseInt(capacity),
    condition: condition,
    critical_to_operations: critical_to_operations
  }, config)
  .then((response) => {
    if (response.data.ErrorMessage) {
      alert(response.data.ErrorMessage);
    }
    else {
      localStorage.setItem('profileStepCompleted', 'storage');
      callback();
    }
  });
};

export default storageInfoHelper;
