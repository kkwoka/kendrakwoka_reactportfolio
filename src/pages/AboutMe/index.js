import React from 'react';
import koda1 from '../../Assets/Images/KodaDork.jpg'
import kk from '../../Assets/Images/prof2copy.jpg'
import koda2_img from '../../Assets/Images/KodaPretty2.jpg'
import './style.css';
import Paper from '@material-ui/core/Paper';

function AboutMe() {
    return (
        <div id="main" className="container-xs container-sm container-md container-lg container-xl wrapper">
            <h1>About Me</h1>

            <br/>
            <div className="col-sm-8">
                <p className="bio" id="bio1">
                    I received my Bachelor of Science in Communication Sciences and Disorders from the University of Texas at Austin in December 2014.
                    My collegiate experience highlighted the importance of communication in the social and professional world.
                    I dedicate myself to great communication, especially when working on team projects. 
                    Upon graduating, I decided to travel with my pup, Koda (pictured below). 
                    In 2019, I returned to UT Austin to pursue a new career in Web Development via a coding bootcamp. 
                    I graduated from the Full-Stack Coding Bootcamp in May 2020.  
                </p>
                <p className="bio" id="bio2">
                    Learning to become a Full-Stack Web Developer, I have built applications using many different languages, frameworks, and tools. 
                    Below is breakdown of skills that I have acquired as a Developer. 
                    A complete list of every tool in my coding arsenal will be found on my 'Portfolio' page as well as several projects I have created / worked on.  
                    I am goal-oriented and dedicated. 
                    My abilities to create progressive, detailed applications for mobile and web make me a strong asset on any team. 
                </p>
            </div>
            <div className="col-sm-6">
                <Paper style={{padding: '20px 30px 10px 10px'}}>
                <ul id="skills">
                    <h4>A Breakdown of Skills:</h4>
                    <li>1 year in client side programming using <b>HTML, CSS, JavaScript, and AJAX</b></li>
                    <li>1 year experience with <b>NodeJS</b></li>
                    <li>DBMS experience with <b>MySQL and Mongo</b></li>
                    <li>1 year experience in mobile development for <b>IOS and Android</b> with <b>ReactJS</b></li>
                    <li>1 year experience creating single-page applications with <b>Vue.js</b></li>
                    <li>Worked in several teams using <b>Agile methodologies and SCRUM</b></li>
                    <li>Experience with structured formats in <b>JSON</b> and <b>XML</b></li>
                    <li>Code management using <b>GIT</b></li>
                    <li>Excel in work ethics</li>
                    <li>Detail-oriented and enthusiastic professional with <b>strong technical and analytical skills</b></li>
                    <li>5+ years leadership/management experience</li>

                </ul>
                </Paper>
            </div>
            <div id="aboutme">
                <div id="pictures">
                    <img alt="koda_img" id="koda_img" src={koda1}/>
                    <img alt="kk_img" id="kk_img" src={kk} />
                    <img alt="koda2_img" id="koda2_img" src={koda2_img} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;