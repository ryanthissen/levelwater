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
          <p>
            There are 155,000 public water systems in the USA.  The vast majority of these public water systems are considered small or very small, meaning they serve less than 3,300 connections.   These small systems often lack the technical, manegerial, and financial capacity that large systems have. These systems also lack the economies of scale that come with having a large rate base.  This can lead to a diverse array of problems, including not meeting the Safe Drinking Water Act.
          </p>
          <p>
            Every year, the American Society of Civil Engineers (ASCE) grades the nation's infrastructure based on factors including capacity, condition, funding, future need, and other factors.  In 2017, the nation's drinking water infrastructure received a grade of <b>D</b>.  From that 2017 report, ASCE noted:
          </p>
          <p>
            "While drinking water infrastructure is funded primarily through a rate-based system, the investment has been inadequate for decades and will continue to be underfunded without significant changes as the revenue generated will fall short as needs grow.  To address deteriorating water infrastructure, asset management provides utility managers and decision-makers with critical information on capital infrastructure assets and timing of investments. Some key steps for asset management include making an inventory of critical assets; evaluating their condition and performance; developing plans to maintain, repair, and replace assets; and funding these activities."
          </p>
        </div>
      </div>
    </div>
    <div className="about-heading">
      <h3>About levelwater.io</h3>
    </div>
    <div className="about">
      <div className="ui grid">
        <div className="sixteen wide column">
          <p>At levelwater.io, we believe that America's drinking water deserves an <b>A</b>. We strive to help public water systems plan for future capital investment needs by providing a user-friendly, low-overhead asset management tool.</p>

          <p>levelwater.io allows public water systems to develop an inventory of critical assets, which includes estimated remaining useful life and replacement cost.  By analyzing a wealth of information pertinent to public water systems, users are able to anticipate major capital investments and set water rates that capture the full cost of providing safe water.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
