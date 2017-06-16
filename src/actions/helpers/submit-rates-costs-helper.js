import axios from 'axios';

const ratesCostsURL = 'https://levelwater-server.herokuapp.com/rates-finances-fixedcosts/';

const submitRatesCostsHelper = (callback) => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };
  let water_systems_id = localStorage.getItem('water_systems_id');
  console.log('watersysid', water_systems_id);

  return axios.get(`${ratesCostsURL}${water_systems_id}`,config )
  .then((response) => {
    callback();
    return(response.data[0]);
  });
};

export default submitRatesCostsHelper;
