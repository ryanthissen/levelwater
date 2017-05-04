import axios from 'axios';
const basicInfoURL = 'http://levelwater-server.herokuapp.com/water-systems';





const basicUserInfoHelper = (pws_name, pws_id, population, connections, callback) => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };

  return axios
    .post(basicInfoURL,
    {
      pws_name: pws_name,
      pws_id: pws_id,
      population: population,
      connections: connections
    }, config)
  .then((response) => {
    if (response.data.errorMessage) {
      console.log('response', response);
      alert(response.data.errorMessage);
    }
    else {
      console.log('response', response);
      localStorage.setItem('water_systems_id', response.data);
      callback();
    }
  });
};

export default basicUserInfoHelper;
