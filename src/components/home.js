import React from 'react';
import myImage from '/Users/barbaravargas/Desktop/updatedWebsite/barb-web/src/girl.png';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TfiGithub } from 'react-icons/tfi'; 
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

const Home = () => {
  return (
  <>
  <svg viewBox="0 0 48 26" preserveAspectRatio="xMidYMid meet" >
    
    <rect x="0px" y="0px" width="48px" height="26px" stroke="#a6a09b" stroke-width=".5px" fill = "#e7e2dd" />
    <rect x="0px" y="0px" width="48px" height="4px" fill = "#6e9277"/>

    <g className ="navbar-item">
      <Link to='/'>
      <FaHome x={4} y= {1.5} size={1.2} color="#302c30"/>
      </Link>
      <Link to="/resume">
      <text x="14px" y="2.5px" font-size="1.01px" fill="#302c30">Resume</text>
      </Link>
      <Link to="/projects">
      <text x="26px" y="2.5px" font-size="1.01px" fill="#302c30">Projects</text>
      </Link>
      <Link to="/contactMe">
       <text x="37px" y="2.5px" font-size="1.01px" fill="#302c30">Contact Me</text>
      </Link>
    </g>

     <text className='abrilFont' x="4" y="9" text-anchor="left" font-size="2.25" fill= "302c1e">Barbara Vargas</text>
     <text className='glacialFont' x="4" y="11" text-anchor="left" font-size="1.25" fill= "302c1e">Software Engineer</text>
     <text className='glacialFont' x="4" y="14" text-anchor="left" font-size=".95" fill= "302c1e"> Early career software engineer currently based </text>
     <text className='glacialFont' x="4" y="15" text-anchor="left" font-size=".95" fill= "302c1e">in Santa Barbara California. Passionate about </text>
     <text className='glacialFont' x="4" y="16" text-anchor="left" font-size=".95" fill= "302c1e"> human computer interaction and helping through </text>
     <text className='glacialFont' x="4" y="17" text-anchor="left" font-size=".95" fill= "302c1e"> technology. </text>
     <text className='glacialFont' x="4" y="19" text-anchor="left" font-size=".95" fill= "302c1e"> I'm always looking for an opportunity to grow!</text>
     
    <g className="navbar-image">
    <a href="https://www.linkedin.com/in/barbaracvargas/">
      <FaLinkedin x={5} y= {22} size={1} color="#302c30"/>
    </a>
      <MdEmail x={8} y= {21.9} size= {1.25} color="#302c30"/>  
      <a href="https://github.com/barbvargas">
      <TfiGithub x={11} y= {22} size= {1.1} color="#302c30"/>   
      </a>
    </g> 

    <image x={28} y={6} width={18} height={18} xlinkHref={myImage}/>
    </svg>
  </>
  )
};
  
export default Home;