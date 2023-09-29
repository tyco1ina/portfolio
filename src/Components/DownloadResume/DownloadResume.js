import React, { Component } from 'react';
import './DownloadResume.css';

export class DownloadResume extends Component {
  
    goToResumePage() {
        window.location.href = "./Resume8.pdf"
    }

    render() {

        return (
        <div id="download-resume-div">
            <h3>Download my resume:</h3>
            <a href="https://drive.google.com/file/d/1DXfsU-qmVlaGcc1Adl6GDImpOHz72oNT/view" target="_blank" style={{textDecoration: "none"}}>
                <div id="download-resume-button">
                    <h4>D O W N L O A D</h4>
                </div>
            </a>
        </div>
        );
  }
}

export default DownloadResume;