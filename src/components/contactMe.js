import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TfiGithub } from 'react-icons/tfi'; 
import {FaHome} from 'react-icons/fa';
import './contantMe.css';

const ContactMe = () => {
  
  
  return (
    <>

    
    <svg viewBox="0 0 48 26" preserveAspectRatio="xMidYMid meet" >
   
    
    <rect x="0px" y="0px" width="48px" height="26px" stroke="#a6a09b" stroke-width=".5px" fill = "#e7e2dd" />
    <rect x="0px" y="0px" width="48px" height="4px" fill = "#6e9277"/>
    <foreignObject x="7px" y="8px" width="12px" height="14px" >

          {/* <!-- contact form --> */}
          <form >
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name" class="no-spacing">Name</label>
              <input
                type="name"
                name="name"
                class="form-control input-sm "
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email" class="no-spacing" >Email address</label>
              <input
                type="email"
                name="email"
                class="form-control input-sm "
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject" class="no-spacing">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control input-sm"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body" class="no-spacing">Message</label>
              <textarea
                class="form-control input-md"
                id="email_body"
                rows="4"
                cols="30"
              ></textarea>
            </div>
            
            
            </form>
          
            </foreignObject>

            <div class="container">  
            <button type="submit" class="btn btn-primary btn-sm">
              Submit
            </button></div>
           
    <g className ="navbar-item">
    <Link to='/'>
      <FaHome x={6} y= {1.5} size={1.2} color="#302c30"/>
      </Link>
      <Link to="/resume">
      <text x="14px" y="2.5px" font-size="1.01px" fill="#302c30">Resume</text>
      </Link>
      <Link to="/projects">
      <text x="25px" y="2.5px" font-size="1.01px" fill="#302c30">Projects</text>
      </Link>
      <Link to="/contactMe">
       <text x="35px" y="2.5px" font-size="1.01px" fill="#ffd51e">Contact Me</text>
      </Link>
    <line x1="24px" y1="6px" x2="24px" y2="23px" stroke="#a6a09b" stroke-width=".15px" />
    </g>
    <text className='abrilFont' x="10" y="8" text-anchor="left" font-size=".95" fill= "302c1e">Let's Connect!</text>

    
 
     <text className='abrilFont' x="30" y="11" text-anchor="left" font-size="1" fill= "302c1e">My Details</text>
     <text className='glacialFont' x="30" y="12.25" text-anchor="left" font-size=".95" fill= "302c1e">Barbara Vargas </text>
     <text className='glacialFont' x="30" y="13.35" text-anchor="left" font-size=".95" fill= "302c1e">Santa Barbara, CA </text>
     <text className='glacialFont' x="30" y="14.45" text-anchor="left" font-size=".95" fill= "302c1e">Email: barbara.coral.v@gmail.com </text>
     <a href="https://github.com/barbvargas">
     <text className='glacialFont' x="30" y="15.55" text-anchor="left" font-size=".95" fill= "302c1e">Linkedin </text>
     </a>
    
    <g className="navbar-image">
    <a href="https://www.linkedin.com/in/barbaracvargas/">
     <FaLinkedin x={30} y= {19} size={1} color="#302c30"/>
     </a>
     <a href="/contactMe">
    <MdEmail x={33} y= {18.9} size= {1.25} color="#302c30"/>  
    </a> 
    <a href="https://github.com/barbvargas">
    <TfiGithub x={36} y= {19} size= {1.1} color="#302c30"/>   
    </a>
    </g> 

    </svg>

 </>
  )
};
export default ContactMe; 