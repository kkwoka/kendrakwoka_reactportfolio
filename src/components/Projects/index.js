import React from 'react';
import projectsJSON from './projects.json';
import { Col, Row, Container } from 'react-bootstrap'
// import covidPic from '../../Assets/Images/covid.jpg';
// import smorgasPic from '../../Assets/Images/smorg.png';
// import readmePic from '../../Assets/Images/readme.webp';
// import weatherPic from '../../Assets/Images/weather.jpg';
// import burgerPic from '../../Assets/Images/burger2.jpg';
// import passGenPic from '../../Assets/Images/password-big.png';
// import quizPic from '../../Assets/Images/quizz.jpg';
// import oopPic from '../../Assets/Images/effective-employee-management.jpg';
// import noteTakerPic from '../../Assets/Images/notes.jpg';
// import dayPlannerPic from '../../Assets/Images/planner.png'
import './style.css';

function Projects() {
    return (
        <Container>
            <Row>
            {projectsJSON.map(project => {
                return (
                    <Col xs={6}  key={project.name}>
                        <img key={project.id} alt={project.name} src={require(`../../Assets/Images/${project.picName}.jpg`)} className="puppypics portCenter" />
                        
                        <a className="projlabel" style={{textDecoration: 'none'}} href={project.git} target="_blank" rel="noopener noreferrer">
                            Code
                            </a>

                        <a className="projlabel2" style={{textDecoration: 'none'}} href={project.heroku} target="_blank" rel="noopener noreferrer">
                            Application
                            </a>

                        <p className="description"><b>{project.name}</b>: { project.description }</p>
                    </Col >
                )
            })
        }
            </Row>
        </Container>
    )
}

export default Projects;