import React from 'react'
import author from '../ashitosh1.jpg'

const AboutMe = () => {
    return (
        <div className="container py-5">
        <div className="row">
        <div className="col-lg-6 col-xm-12">
           <div className="photo-wrap mb-5">
           <img className="profile-img" src={author} alt="author..."/>
           </div>
           
        </div>
        <div className="col-lg-6 col-xm-12">
        <div class="about-heading"> <h3 className='text-center' >About Me</h3></div>
            <p className="text-justify">
            <q style={{fontStyle:"italic",fontSize:"18px"}}>
            Hello! I am Ashitosh.I'm  B.E. Graduate specialized in Computer Engineering.I had completed Full Stack Development
            Course from GUVI .Technologies I use is MERN(MongoDB,Express,ReactJs and NodeJS).

            I create responsive websites that can be displayed on all devices desktops and smartphones.I have strong technical skills as well as interpersonal skills .I'm egar to work in a challenging environment in order to achieve personal growth in terms of skills and  help in success of organization
            </q>
            </p>
        </div>
        </div>
        
        </div>
    )
}

export default AboutMe
