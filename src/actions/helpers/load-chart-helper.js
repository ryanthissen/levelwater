import axios from 'axios';

let algorithmURL = 'https://levelwater-server.herokuapp.com/algorithm-results/';
let waterSystemURL = 'https://levelwater-server.herokuapp.com/water-systems/';

const loadChartHelper = () => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };
  let functionResponse = {};
  let id = parseInt(localStorage.getItem('water_systems_id'));
  return axios.get(`${algorithmURL}${id}`, config)
  .then((response) => {
    if (response) {
      functionResponse = JSON.parse(response.data.algorithm_results)
      console.log(functionResponse)
      // return(JSON.parse(response.data.algorithm_results));
    }
    return axios.get(`${waterSystemURL}${id}`, config)
  })
  .then((response) => {
    if (response) {
      functionResponse.water_system_results = response.data;
    }
    console.log(functionResponse)
    return functionResponse;
  });
};

export default loadChartHelper;
