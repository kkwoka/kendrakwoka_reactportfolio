import React from 'react';
import projectsJSON from './projects.json';
import covidPic from '../../Assets/Images/covid.jpg';
import smorgasPic from '../../Assets/Images/smorg.png';
import readmePic from '../../Assets/Images/readme.webp';
import weatherPic from '../../Assets/Images/weather.jpg';
import burgerPic from '../../Assets/Images/burger2.jpg';
import passGenPic from '../../Assets/Images/password-big.png';
import quizPic from '../../Assets/Images/quizz.jpg';
import oopPic from '../../Assets/Images/effective-employee-management.jpg';
import noteTakerPic from '../../Assets/Images/notes.jpg';
import dayPlannerPic from '../../Assets/Images/planner.png'
import './style.css';

let pictureArray= [covidPic, smorgasPic, readmePic, weatherPic, burgerPic, passGenPic,quizPic, oopPic, noteTakerPic, dayPlannerPic ];

function Projects() {
    return (
        <div>
            {projectsJSON.map(project => {
                let image = project.img;
                console.log(image);
                return (
                    <div className="col-sm-6" key={project.name}>
                        {pictureArray.map(picture => 
                            <img alt={project.name} src={picture} className="puppypics portCenter" />
                        )}
                        <div>
                            <a className="projlabel" style={{textDecoration: 'none'}} href={project.git} target="_blank" rel="noopener noreferrer">
                            Code
                            </a>
                        </div>
                        <div>
                            <a className="projlabel2" style={{textDecoration: 'none'}} href={project.heroku} target="_blank" rel="noopener noreferrer">
                            Application
                            </a>
                        </div>
                        <p className="description"><b>{ project.description }</b></p>
                    </div>
                )
            })
        }
        </div>
            







        // <div>
        //     <div className="row">
        //         <div className="col-sm-6">
        //             <img alt="covid portal" src={covidPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Covid_Portal.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Covid_Portal.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>COVID-19 Patient Portal:</b> A Vue.js application to input patient information about COVID-19 testing.</p>
        //         </div>
        //         <div className="col-sm-6">
        //             <img alt="smorgas-chord" src={smorgasPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Smorgas_Chord.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Smorgas_Chord.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Smorgas-Chord:</b> An application for new guitar players to learn how to play songs with both guitar chords and their lyrics.</p>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-sm-6">
        //             <img alt="readme generator" src={readmePic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Readme_Generator.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <p className="description"><b>README Generator:</b> A javascript axios / inquirer application to create a quality readme.</p>
        //         </div>
        //         <div className="col-sm-6">
        //             <img alt="weather dashboard" src={weatherPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Weather_Dashboard.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Weather_Dashboard.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Weather Dashboard:</b> A jquery application for viewing weather in any given city the user inputs.</p>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-sm-6">
        //             <img alt="eat-da-burger" src={burgerPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Eat_Da_Burger.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Weather_Dashboard.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Eat-Da-Burger:</b> An application using handlebars.js / MVC / ORM for creating burgers you want to eat and eating them.</p>
        //         </div>
        //         <div className="col-sm-6">
        //             <img alt="password generator" src={passGenPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Password_Generator.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Password_Generator.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Password Generator:</b> A javascript application for creating difficult passwords with multiple options for added protection.</p>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-sm-6">
        //             <img alt="quiz" src={quizPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Quiz.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Quiz.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Quiz:</b> A timed pop-culture javascript quiz.</p>
        //         </div>
        //         <div className="col-sm-6">
        //             <img alt="oop employee" src={oopPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.OOP_Employee.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <p className="description"><b>OOP Employee:</b> A javascript Object-Oriented Programming application using node.js / inquirer / jest for creating employees. </p>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-sm-6">
        //             <img alt="note taker" src={noteTakerPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Note_Taker.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Note_Taker.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Note Taker:</b> A node.js / express.js application for taking and storing notes online.</p>
        //         </div>
        //         <div className="col-sm-6">
        //             <img alt="day planner" src={dayPlannerPic} className="puppypics portCenter" />
        //             <div><a className="projlabel" style={{textDecoration: 'none'}} href={ProjectsJSON.Day_Planner.git} target="_blank" rel="noopener noreferrer">Code</a></div>
        //             <div><a className="projlabel2" style={{textDecoration: 'none'}} href={ProjectsJSON.Day_Planner.heroku} target="_blank" rel="noopener noreferrer">Application</a></div>
        //             <p className="description"><b>Day Planner:</b> A jquery application for scheduling your current day.</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Projects;