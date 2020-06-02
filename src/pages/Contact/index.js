import React from 'react';
import './style.css';
import Resume from '../../Assets/Resume.pdf';

function Contact() {
    return (
        <div>
            <div id="main" className="container-sm container-md container-lg container-xl wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Resources</h1>
                        <div className="resources">
                            <p className="resLink"><a className="resLink" href={Resume} download><i className="far fa-file-pdf"></i> Resume</a></p>
                            <p className="resLink"><a className="resLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kendra-kwoka-553b68196/" style={{textDecoration: 'none'}}><i className="fab fa-linkedin"></i>  LinkedIn</a></p>
                            <p className="resLink"><a className="resLink" target="_blank" rel="noopener noreferrer" href="https://github.com/kkwoka" style={{textDecoration: 'none'}}><i className="fab fa-github-square"></i>   Github</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h1>Contact</h1>
                        <div className="resources">
                            <p className="resLink"><i className="fas fa-mobile-alt"></i>  <a href="tel:9365203642"> (936) 520.3642 </a></p>
                            <p className="resLink"><i className="far fa-envelope"></i>  <a href="mailto:kendrakwoka@gmail.com"> kendrakwoka@gmail.com </a></p>
                            {/* <p className="resLink"><i className="far fa-envelope"></i> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kendrakwoka@gmail.com&tf=1" target="_blank">    kendrakwoka@gmail.com</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;