import axios from 'axios';

const ratesCostsURL = 'http://levelwater-server.herokuapp.com/rates-finances-fixedcosts/';

const submitRatesCostsHelper = () => {
  let config = {
    headers: {'token': localStorage.getItem('token')}
  };
  let water_systems_id = localStorage.getItem('water_systems_id');
  console.log('watersysid', water_systems_id);

  return axios
    .get(`${ratesCostsURL}${water_systems_id}`,config )
    .then((response) => {
      console.log(response);
    });
};

export default submitRatesCostsHelper;
