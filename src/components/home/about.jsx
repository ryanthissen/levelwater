import React from 'react';
import styles from './home.css';

const About = () => (
  <div className="about-container">
    <div className="about-heading">
      <h3>About America's Water Infrastructure</h3>
    </div>
    <div className="about">
      <div className="ui grid">
        <div className="sixteen wide column">
          <p>This year the American Society of Civil Engineers evaluated the USA's drinking water infrastructure and rated it a 'D'. There are 155,000 public water systems in the country, the majority of which are smaller systems that lack the economies of scale and the technical, manegerial, and financial capacity that large systems have. This lack of asset management means that many are not meeting state requirements or those of the Safe Drinking Water Act, and may be one capital malfunction away from going bankrupt and leaving their customers dry.</p>
        </div>
      </div>
    </div>
    <div className="about-heading">
      <h3>About levelwater.io</h3>
    </div>
    <div className="about">
      <div className="ui grid">
        <div className="sixteen wide column">
          <p>At levelwater.io we believe that America's drinking water deserves an 'A'. We strive to help small water systems improve their infrastructure by providing a user-friendly, low-overhead asset management system to help ensure that they are keeping track of all of their capital assets and when they need to be replaced, as well as using a complex algorithm to let them know how they should be setting their rates currently as well as in the years to come.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
