import axios from 'axios';

let algorithmURL = 'http://levelwater-server.herokuapp.com/algorithm-results/'

const loadChartHelper = () => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };

  let id = parseInt(localStorage.getItem('water_systems_id'));

  return axios
    .get(`${algorithmURL}${id}`, config)
    .then((response) => {
      console.log(JSON.parse(response.data.algorithm_results));
      return(JSON.parse(response.data.algorithm_results));
    });
};

export default loadChartHelper;
