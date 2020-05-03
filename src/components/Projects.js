import React from 'react';

function Projects() {
    return (
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <img alt="covid portal" src="Assets/Images/covid.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/Project_2" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://fast-wildwood-12677.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>COVID-19 Patient Portal:</b> A Vue.js application to input patient information about COVID-19 testing.</p>
                </div>
                <div class="col-sm-6">
                    <img alt="smorgas-chord" src="Assets/Images/smorg.png" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/Smorgas-Chord" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://kkwoka.github.io/Smorgas-Chord/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Smorgas-Chord:</b> An application for new guitar players to learn how to play songs with both guitar chords and their lyrics.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img alt="readme generator" src="Assets/Images/readme.webp" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/ReadME_Generator" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <p class="description"><b>README Generator:</b> A javascript axios / inquirer application to create a quality readme.</p>
                </div>
                <div class="col-sm-6">
                    <img alt="weather dashboard" src="Assets/Images/weather.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/WeatherDashboard" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://kkwoka.github.io/WeatherDashboard/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Weather Dashboard:</b> A jquery application for viewing weather in any given city the user inputs.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img alt="eat-da-burger" src="Assets/Images/burger2.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/Eat-Da-Burger" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://rocky-ocean-88521.herokuapp.com/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Eat-Da-Burger:</b> An application using handlebars.js / MVC / ORM for creating burgers you want to eat and eating them.</p>
                </div>
                <div class="col-sm-6">
                    <img alt="password generator" src="Assets/Images/password-big.png" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/passwordGenerator" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://kkwoka.github.io/passwordGenerator/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Password Generator:</b> A javascript application for creating difficult passwords with multiple options for added protection.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img alt="quiz" src="Assets/Images/quizz.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/JavaScript_Quiz" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://kkwoka.github.io/JavaScript_Quiz/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Quiz:</b> A timed pop-culture javascript quiz.</p>
                </div>
                <div class="col-sm-6">
                    <img alt="oop employee" src="Assets/Images/effective-employee-management.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/OOP" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <p class="description"><b>OOP Employee:</b> A javascript Object-Oriented Programming application using node.js / inquirer / jest for creating employees. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img alt="note taker" src="Assets/Images/notes.jpg" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/NoteTaker" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://evening-thicket-00801.herokuapp.com/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Note Taker:</b> A node.js / express.js application for taking and storing notes online.</p>
                </div>
                <div class="col-sm-6">
                    <img alt="day planner" src="Assets/Images/planner.png" class="puppypics portCenter" />
                    <div><a class="projlabel" style={{textDecoration: 'none'}} href="https://github.com/kkwoka/DailyPlanner" target="_blank" rel="noopener noreferrer">Code</a></div>
                    <div><a class="projlabel2" style={{textDecoration: 'none'}} href="https://kkwoka.github.io/DailyPlanner/" target="_blank" rel="noopener noreferrer">Application</a></div>
                    <p class="description"><b>Day Planner:</b> A jquery application for scheduling your current day.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;