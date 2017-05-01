import axios from 'axios';

const storageURL = 'http://levelwater-server.herokuapp.com/storageReservoirs';

let config = {
  headers: {'token': localStorage.getItem('token')}
};

const storageInfoHelper = (water_systems_id, reservoir_type, reservoir_name, year_constructed, capacity, condition, callback) => {
  return axios
    .post(storageURL, {
      water_systems_id: water_systems_id,
      reservoir_type: reservoir_type,
      reservoir_name: reservoir_name,
      year_constructed: year_constructed,
      capacity: capacity,
      condition: condition
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

export default storageInfoHelper;
