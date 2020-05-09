import React from 'react';
import projectsJSON from './projects.json';
import { Col, Row, Container } from 'react-bootstrap'

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