import axios from 'axios';
const basicInfoURL = 'http://levelwater-server.herokuapp.com/water_systems';

const basicUserInfoHelper = (pws_name, pws_id, population, connections, callback) => {
  return axios
    .post(basicInfoURL, {
      pws_name: pws_name,
      pws_id: pws_id,
      population: population,
      connections: connections
    })
  .then((response) => {
    if (response.data.errorMessage) {
      console.log('response', response);
      alert(response.data.errorMessage);
    }
    else {
      console.log('response', response);
      callback();
    }
  });
};

export default basicUserInfoHelper;
