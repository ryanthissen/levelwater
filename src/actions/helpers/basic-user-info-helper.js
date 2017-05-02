import axios from 'axios';
const basicInfoURL = 'http://levelwater-server.herokuapp.com/water-systems';

let token = localStorage.getItem('token');
console.log('token', token);

let config = {
  headers: {'token': token}
};


console.log(localStorage.getItem('token'));


const basicUserInfoHelper = (pws_name, pws_id, population, connections, callback) => {
  console.log('config', config);
  let token = localStorage.getItem('token');
  return axios
    .post(basicInfoURL,
      {
      pws_name: pws_name,
      pws_id: pws_id,
      population: population,
      connections: connections
    }, {headers: {'token': token}
  })
  .then((response) => {
    if (response.data.errorMessage) {
      console.log('response', response);
      alert(response.data.errorMessage);
    }
    else {
      console.log('response', response);
      localStorage.setItem('water_systems_id', response.data)
      callback();
    }
  });
};

export default basicUserInfoHelper;
