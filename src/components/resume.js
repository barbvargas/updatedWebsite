import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TfiGithub } from 'react-icons/tfi'; 
import {FaHome} from 'react-icons/fa';
const Resume = () => {
  return (
  <>
   <svg viewBox="0 0 48 26" preserveAspectRatio="xMidYMid meet" >
    
    <rect x="0px" y="0px" width="48px" height="26px" stroke="#a6a09b" stroke-width=".5px" fill = "#e7e2dd" />
    <rect x="0px" y="0px" width="48px" height="4px" fill = "#6e9277"/>

    <g className ="navbar-item">
    <g className ="navbar-item">
      <Link to='/'>
      <FaHome x={6} y= {1.5} size={1.2} color="#302c30"/>
      </Link>
      <Link to="/resume">
      <text x="14px" y="2.5px" font-size="1.01px" fill="#ffd51e">Resume</text>
      </Link>
      <Link to="/projects">
      <text x="25px" y="2.5px" font-size="1.01px" fill="#302c30">Projects</text>
      </Link>
      <Link to="/contactMe">
       <text x="35px" y="2.5px" font-size="1.01px" fill="#302c30">Contact Me</text>
      </Link>
    </g>

    <line x1="29.75px" y1="6px" x2="29.75px" y2="23px" stroke="#a6a09b" stroke-width=".15px" />
    </g>
    
     <text className='abrilFont' x="1.5" y="8" text-anchor="left" font-size=".90" fill= "302c1e">Experience</text>

     <text className='glacialBold' x="2" y="9.5" text-anchor="left" font-size=".90" fill= "302c1e">Legal Intern</text>
     <text className='glacialBold' x="2" y="10.5" text-anchor="left" font-size=".85" fill= "302c1e"> Deckers Outdoor Corporation || May 2021 - Sept. 2021 </text>
     <text className='glacialFont' x="2" y="11.5" text-anchor="left" font-size=".75" fill= "302c1e">- Authored and organized documents to aid paralegals and attorneys. </text>
     <text className='glacialFont' x="2" y="12.5" text-anchor="left" font-size=".75" fill= "302c1e">- Conducted and presented market research.</text>
     <text className='glacialFont' x="2" y="13.5" text-anchor="left" font-size=".75" fill= "302c1e">- Managed and maintained social media centered around protection of IP.</text>

     <text className='glacialBold' x="2" y="15.75" text-anchor="left" font-size=".90" fill= "302c1e">Operations Intern  </text>
     <text className='glacialBold' x="2" y="16.75" text-anchor="left" font-size=".85" fill= "302c1e"> Cielo24 || July 2015 - Aug. 2015 </text>
     <text className='glacialFont' x="2" y="17.75" text-anchor="left" font-size=".75" fill= "302c1e">- Performed and presented closed caption audits, verified and updated documents. </text>
     <text className='glacialFont' x="2" y="18.75" text-anchor="left" font-size=".75" fill= "302c1e">- Created onboarding guide for new hires and managed customer questions. </text>
     <text className='glacialFont' x="2" y="19.75" text-anchor="left" font-size=".75" fill= "302c1e">- Facilitated captioner job cycles and assisted with cross functional communication </text>
    
     <text className='abrilFont' x="30.75" y="8" text-anchor="left" font-size=".90" fill= "302c1e">Skills</text>
     <text className='glacialFont' x="30.75" y="9" text-anchor="left" font-size=".65" fill= "302c1e">&#160;&#160;C/C++&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Python&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;HTML/CSS </text>
     <text className='glacialFont' x="30.75" y="10" text-anchor="left" font-size=".65" fill= "302c1e">&#160;&#160;Java&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Javascript&#160;&#160;&#160;&#160;&#160;&#160;MATLAB </text>
     <text className='glacialFont' x="30.75" y="11" text-anchor="left" font-size=".65" fill= "302c1e">&#160;&#160;VSCode&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Eclipse&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Git</text>
     <text className='glacialFont' x="30.75" y="12" text-anchor="left" font-size=".65" fill= "302c1e">&#160;&#160;Linux&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Vim&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Docker </text>
     <text className='glacialFont' x="30.75" y="13" text-anchor="left" font-size=".65" fill= "302c1e">&#160;&#160;TensorFlow&#160;&#160;&#160;&#160;&#160;Keras&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Pandas </text>

     <text className='glacialBold' x="30.75" y="14.75" text-anchor="left" font-size=".85" fill= "302c1e">University of California  Irvine, 2022 </text>
     <text className='glacialFont' x="30.75" y="15.75" text-anchor="left" font-size=".70" fill= "302c1e">Masters Embedded and Cyber Physical Systems </text>
     <text className='glacialFont' x="30.75" y="16.75" text-anchor="left" font-size=".70" fill= "302c1e">GPA: 3.69 </text>

     <text className='glacialBold' x="30.75" y="18" text-anchor="left" font-size=".85" fill= "302c1e">University of California  San Diego, 2020 </text>
     <text className='glacialFont' x="30.75" y="19" text-anchor="left" font-size=".70" fill= "302c1e">B.S Cognitive Science  w/Human Computer Interaction </text>
     <text className='glacialFont' x="30.75" y="20" text-anchor="left" font-size=".70" fill= "302c1e">minor: Computer Science </text>

    
     <g className="navbar-image">
    <a href="https://www.linkedin.com/in/barbaracvargas/">
      <FaLinkedin x={5} y= {22} size={1} color="#302c30"/>
    </a>
    <a href="/contactMe">

      <MdEmail x={8} y= {21.9} size= {1.25} color="#302c30"/>  
      </a>
      <a href="https://github.com/barbvargas">
      <TfiGithub x={11} y= {22} size= {1.1} color="#302c30"/>   
      </a>
    </g> 
    </svg>






  </>
  )
};
export default Resume;