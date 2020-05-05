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
            <img alt="koda_img" id="koda_img" src={koda1}/>
            <img alt="kk_img" id="kk_img" src={kk} />
            <img alt="koda2_img" id="koda2_img" src={koda2_img} />

            <p className="bio" id="bio1">I received my B.S. in Communication Sciences and Disorders from the University of Texas at Austin in 2014. 
                Upon graduating, I decided to travel with my pup, Koda (pictured above). 
                While traveling, I decided to return to school to pursue a career in coding / web development.
                I will graduate from the Trilogy Educations Services' Full-Stack Coding Bootcamp (through the University of Texas at Austin) in May 2020. </p>
            <p className="bio" id="bio2">Learning to become a Full-Stack Web Developer, I have built applications using many different languages, frameworks, and tools. 
                A complete list of every tool in my coding arsenal will be found on my 'Portfolio' page. <b>My current goal is to become a Front End / Full Stack Web Developer </b>
                for a company that allows me to utilize my skills in unique and challenging ways, as I aspire to work hard and push boundaries on new 
                learnings and developments. </p>
        </div>
    )
}

export default AboutMe;