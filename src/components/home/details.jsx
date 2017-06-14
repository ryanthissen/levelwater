import React from 'react';
import styles from './home.css';


const Details = () => (
  <div id="details">
    <div className="ui grid">
      <div className="column sixteen wide"><h3>How It Works</h3></div>
      <div className="column sixteen wide">
        <ul>
          <li>- You enter information about the financial status of your system, including current rates, revenue, and costs.</li>
          <li>- You enter information about the capacity, condition, and age of your system's assets.</li>
        </ul>
      </div>
      {/* <div className="column eight wide">
        <p></p>
        <ul>
          <li>- You are provided with a dashboard showing the estimated remaining life and replacement costs for your system's infrastructure.</li>
          <li>- You raise rates, as necessary, to account for future needs of your water system.</li>
        </ul>
      </div> */}
    </div>
  </div>
);

export default Details;
