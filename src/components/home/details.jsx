import React from 'react';
import styles from './home.css';


const Details = () => (
  <div id="details">
    <div className="ui grid">
      <div className="column sixteen wide"><h3>More Details</h3></div>
      <div className="column eight wide">
        <p>More</p>
        <ul>
          <li>-Lorem ipsum dolor sit amet,</li>
          <li>-consectetur adipisicing elit.</li>
          <li>-Tempora dolores, dolore quisquam ea minus</li>
          <li>-veniam labore minima cupiditate sunt</li>
        </ul>
      </div>
      <div className="column eight wide">
        <p>Details</p>
        <ul>
          <li>-Lorem ipsum dolor sit amet,</li>
          <li>-consectetur adipisicing elit.</li>
          <li>-Tempora dolores, dolore quisquam ea minus</li>
          <li>-veniam labore minima cupiditate sunt</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Details;
