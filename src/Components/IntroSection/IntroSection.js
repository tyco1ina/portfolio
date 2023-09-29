import React, { Component } from 'react';
import './IntroSection.css';

export class IntroSection extends Component {
  // Initialize state
  render() {

    return (
      <div id="intro-div">
        <div className="intro-inner-div" id="intro-inner-div-left">
          <h1>Tiberius Colina</h1>
          <h4 id="role-h4">Computer Science at Georgia Tech</h4>
          <h4>Email: tcolina3@gatech.edu<br></br>
          
          Phone: (804) 896-0463<br></br>
          <h4><a href="https://www.linkedin.com/in/tiberius-colina-2b8615200/" target="_blank">LinkedIn</a></h4></h4>
          
          
        </div>
        <div className="intro-inner-div" id="intro-inner-div-right">
          <div id="profile-picture-div">

          </div>
        </div>
      </div>
    );
  }
}

export default IntroSection;