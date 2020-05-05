import React from 'react';
import koda1 from '../../Assets/Images/KodaDork.jpg'
import kk from '../../Assets/Images/prof2copy.jpg'
import koda2_img from '../../Assets/Images/KodaPretty2.jpg'
import './style.css';

function AboutMe() {
    return (
        <div id="main" className="container-xs container-sm container-md container-lg container-xl wrapper">
            <h1>About Me</h1>

            <br/>
            <div id="aboutme">
                <div id="pictures">
                    <img alt="koda_img" id="koda_img" src={koda1}/>
                    <img alt="kk_img" id="kk_img" src={kk} />
                    <img alt="koda2_img" id="koda2_img" src={koda2_img} />
                </div>
                
                <p className="bio" id="bio1">
                    I received my Bachelor of Science in Communication Sciences and Disorders from the University of Texas at Austin in December 2014. 
                    Upon graduating, I decided to travel with my pup, Koda (pictured above). 
                    In 2019, I returned to UT Austin to pursue a new career in Web Development via a coding bootcamp. 
                    I graduated from the Full-Stack Coding Bootcamp in May 2020.  
                </p>
                <p className="bio" id="bio2">
                    Learning to become a Full-Stack Web Developer, I have built applications using many different languages, frameworks, and tools. 
                    A complete list of every tool in my coding arsenal will be found on my 'Portfolio' page as well as several projects I have created / worked on.  
                    My abilities to create progressive, detailed applications for mobile and web make me a strong asset on any team. 
                    I am goal-oriented, dedicated, and work well on teams.
                    
                </p>
            </div>
        </div>
    )
}

export default AboutMe;