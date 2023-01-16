import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TfiGithub } from 'react-icons/tfi'; 
import {FaHome} from 'react-icons/fa';
const ContactMe = () => {
  
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
     <text x="37px" y="2.5px" font-size="1.01px" fill="#e1c340">Contact Me</text>
    </Link>
    <line x1="24px" y1="6px" x2="24px" y2="23px" stroke="#a6a09b" stroke-width=".15px" />
  
    </g>
    <text className='abrilFont' x="9" y="9" text-anchor="left" font-size=".95" fill= "302c1e">Let's Connect!</text>
    <rect x="6.5px" y="14px" width="11.5px" height="6px" fill = "#f8f8f3" />

     <text className='abrilFont' x="30" y="11" text-anchor="left" font-size=".95" fill= "302c1e">My Details</text>
     <text className='glacialFont' x="30" y="12.25" text-anchor="left" font-size=".85" fill= "302c1e">Barbara Vargas </text>
     <text className='glacialFont' x="30" y="13.25" text-anchor="left" font-size=".85" fill= "302c1e">Santa Barbara, CA </text>
     <text className='glacialFont' x="30" y="14.25" text-anchor="left" font-size=".85" fill= "302c1e">Email: barbara.coral.v@gmail.com </text>
     <text className='glacialFont' x="30" y="15.25" text-anchor="left" font-size=".85" fill= "302c1e">Linkedin </text>
     
    
    <g className="navbar-image">
     <FaLinkedin x={30} y= {19} size={1} color="#302c30"/>
    </g>
    <g className="navbar-image">
    <MdEmail x={33} y= {18.9} size= {1.25} color="#302c30"/>   
    </g>
    <g className="navbar-image">
    <TfiGithub x={36} y= {19} size= {1.1} color="#302c30"/>   
    </g> 

    </svg>

 </>
  )
};
export default ContactMe; 