import React, { Component } from 'react';
import './App.css';

import { IntroSection } from "./Components/IntroSection/IntroSection" 
import { DownloadResume } from "./Components/DownloadResume/DownloadResume"

document.body.style = "background: #0d042f";

class App extends Component {
  // Initialize state
  constructor() {
    super()
    this.state = {
      projectView: "Major"
    }
  }

  showCorrectProjects() {
    if (this.state.projectView === "Major") {
      return (
        <div>

        <div className="experience-example-div">
          <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
            <h1>Undergraduate Researcher</h1>
            <h4 className="role-descriptor-h4">
              Georgia Tech Smart City Infrastructure Research Group | August 2023 - Present<br></br>
            </h4>

            <ul>
              <li>Implementing and training deep learning model to detect and classify road signs using MobileNetV2, a memory-efficient, 53-layer Convolutional Neural Network designed by Google to run on personal mobile devices.</li>
              <li>Adapted swiftly to the project’s agile development environment, participating in weekly stand-ups and sprint planning.</li>

            </ul>
          </div>
          <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
            {/* <div className="project-photo-div" id="project-photo-div-rpc" onClick={()=>{this.goToProject("RPC")}}></div> */}
          </div>
        </div>

        <div className="experience-example-div">
          <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
            <h1>Software Development Intern</h1>
            <h4 className="role-descriptor-h4">
              DBNOSTIX LLC | May 2023 - August 2023<br></br>
            </h4>

            <ul>
              <li>Developed tool that processes 500+ companies’ market info by designing, proposing and implementing AWS solution.</li>
              <li>Improved data collection and processing time of 2,000+ CSV files by 85 percent over local code prototype by utilizing Dockerized, asynchronous, and concurrent Python AWS Lambda functions, Amazon EventBridge, and Amazon S3.</li>
              <li>Designed and developed React.js frontend for data pipeline visualization; provisioned additional serverless architecture with AWS Lambda, Amazon API Gateway, and Amazon DynamoDB to interact with data pipeline.</li>
              <li>Utilized Lucidchart to architect AWS infrastructure and developed data pipline and frontend in accordance with diagram.</li>

            </ul>
          </div>
          <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
            <div className="project-photo-div" id="project-photo-div-dbnostix" onClick={()=>{this.goToProject("DBNOSTIX")}}></div>
          </div>
        </div>

        <div className="experience-example-div">
          <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
            <h1>Full Stack Developer Intern</h1>
            <h4 className="role-descriptor-h4">
              Richmond Pilipino Class | March 2023 - April 2023<br></br>
            </h4>

            <ul>
              <li>Minimized backend costs by converting Express backend to serverless API using API Gateway + AWS Lambda (Python).</li>
              <li>Streamlined website management of hundreds of images by updating serverless API to perform CRUD operations on Amazon DynamoDB + Amazon S3 image store.</li>
              <li>Reduced image loading time of 400+ images by 95 percent through leveraging Amazon CloudFront and Amazon S3.</li>
              <li>Automated provisioning of multiple cloud resources saving hours of manual AWS deployment by converting calendar events API to Infrastructure as Code using Terraform.</li>
              <li>Used Lucidchart to design AWS infrastructure; migrated React.js frontend to AWS by building CI/CD pipeline using Github Actions and altered backend in accordance with diagram.</li>

            </ul>
          </div>
          <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
            <div className="project-photo-div" id="project-photo-div-rpc" onClick={()=>{this.goToProject("RPC")}}></div>
          </div>
        </div>

        <div className="experience-example-div">
          <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
            <h1>Backend Developer</h1>
            <h4 className="role-descriptor-h4">
            Code for Charlottesville - Piedmont Native Plants Database Project | March 2023<br></br>
            </h4>

            <ul>
              <li>Designed and began implementation of a Node.js CRUD application that keeps records of over 400 plants.</li>
              <li>Implemented edit request system with Express,js and MySQL to streamline relay between researchers and developers.</li>
              <li>Led team of three developers in implementation of the edit request system during hackathon.</li>

            </ul>
          </div>
          <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
            <div className="project-photo-div" id="project-photo-div-plants" onClick={()=>{this.goToProject("RPC")}}></div>
          </div>
        </div>
        </div>
      )
    } else {
      return (
        <div>

<div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>FRC Team 5804 Programmer</h1>
              <h4 className="role-descriptor-h4">
                Collegiate School Robotics Team | January 2019 - April 2022<br></br>
              </h4>

              <ul>
                <li>Programmed a robot each spring using Java to compete in the FIRST Robotics Competition</li>
                <li>Achieved 3rd place at the world championship of FRC, advancing farther than 99.8% of other teams</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-worlds"></div>
            </div>
          </div>

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>Frontend Developer</h1>
              <h4 className="role-descriptor-h4">
                Colina Dental Center | January 2021 - March 2021<br></br>
              </h4>

              <ul>
                <li>Designed and developed a website using React.js for Colina Dental Center</li>
                <li>Implemented a modern design to provide easy-to-read information to over 1,000 patients</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-cdc" onClick={()=>{this.goToProject("CDC")}}></div>
            </div>
          </div>

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>RoboticsLink</h1>
              <h4 className="role-descriptor-h4">
                Independent Project | November 2020 - December 2020<br></br>
              </h4>

              <ul>
                <li>Created a web application to provide easy-to-read information about 3,000+ FIRST robotics teams</li>
                <li>Utilized the TheBlueAlliance API, Express.js, and Node.js to fetch and process team information</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-roboticslink" onClick={()=>{this.goToProject("RBL")}}></div>
            </div>
          </div>

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>Portfolio Website</h1>
              <h4 className="role-descriptor-h4">
                Independent Project | January 2023<br></br>
              </h4>

              <ul>
                <li>Created a simple, modern frontend uisng React.js to display projects</li>
                <li>Utilized Express.js, Node.js, and MongoDB to track the number of website visits</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-pfw" onClick={()=>{this.goToProject("PFW")}}></div>
            </div>
          </div>
          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>TorchAtWorlds</h1>
              <h4 className="role-descriptor-h4">
                Retired Independent Project | April 2022<br></br>
              </h4>

              <ul>
                <li>Developed a web application using React.js to display my FRC team’s standing at FIRST Championship</li>
                <li>Utilized TheBlueAlliance API to provide real-time updates to the 1,600+ members of my team community</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-taw"></div>
            </div>
          </div>

          

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>ISS Pinpointer</h1>
              <h4 className="role-descriptor-h4">
                Independent Project | May 2021<br></br>
              </h4>

              <ul>
                <li>Designed a website to display the current location of the International Space Station</li>
                <li>Utilized the OpenNotify API along with Node.js and Express.js to fetch ISS information</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-iss" onClick={()=>{this.goToProject("ISS")}}></div>
            </div>
          </div>

    

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>RoboticsLink</h1>
              <h4 className="role-descriptor-h4">
                Independent Project | November 2020 - December 2020<br></br>
              </h4>

              <ul>
                <li>Created a web application to provide easy-to-read information about 3,000+ FIRST robotics teams</li>
                <li>Utilized the TheBlueAlliance API, Express.js, and Node.js to fetch and process team information</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-roboticslink" onClick={()=>{this.goToProject("RBL")}}></div>
            </div>
          </div>

          <div className="experience-example-div">
            <div className="experience-example-div-inner" id="experience-example-div-inner-lower">
              <h1>GPA Finder</h1>
              <h4 className="role-descriptor-h4">
                Retired Independent Project | July 2020 - August 2020<br></br>
              </h4>

              <ul>
                <li>Created a web application to fetch academic information and calculate a student's GPA</li>
                <li>Utilized the Powerschool API, Express.js, and Node.js to fetch and process academic information, and React.js to display the information</li>

              </ul>
            </div>
            <div className="experience-example-div-inner" id="experience-example-div-inner-upper">
              <div className="project-photo-div" id="project-photo-div-gpa"></div>
            </div>
          </div>
        </div>
      )
    }
  }

  goToProject(project) {
    switch (project) {
      case ("DBNOSTIX"):
        break;
      case ("RPC"):
        window.open("http://rpcrichmond.herokuapp.com/");
        break;
      case ("PFW"):
        window.location = "header";
        break;
      case ("ISS"): 
        window.open("http://isspinpointer.herokuapp.com/");
        break;
      case ("CDC"): 
        window.open("http://colinadentalcenter.herokuapp.com/");
        break;
      case ("RBL"): 
        window.open("http://roboticslink.herokuapp.com/");
        break;
      default:
        return null;
    }
  }
  
  render() {

    return (
      <div className="App">
        <div id="header">

        </div>
        <div id="decorative-header">
          <div id="long-green-line"></div>
          <div id="green-dot"></div>
        </div>
        <IntroSection/>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <DownloadResume/>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div id="experience-div">
          <h1 id="experience-header-h1">My Experience/Projects</h1>

          <div className="project-selector">
            <div className="project-selector-button" onClick={()=>this.setState({ projectView: "Major" })}><h3>Major</h3></div> 
 
            
            <div className="project-selector-button" onClick={()=>this.setState({ projectView: "Minor" })}><h3>Minor</h3></div> 

            
          </div>

          {this.showCorrectProjects()}

          
        </div>
      </div>
    );
  }
}

export default App;