import React from 'react';
import './style.css';
import Resume from '../../Assets/Resume 2020 Dev.pdf';

function Contact() {
    return (
        <div>
            <div id="main" className="container-sm container-md container-lg container-xl wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Resources</h1>
                        <p className="resLink"><a className="resLink" target="_blank" rel="noopener noreferrer" href={Resume}><i className="far fa-file-pdf"></i> Resume</a></p>
                        <p className="resLink"><a className="resLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kendra-kwoka-553b68196/" style={{textDecoration: 'none'}}><i className="fab fa-linkedin"></i>  LinkedIn</a></p>
                        <p className="resLink"><a className="resLink" target="_blank" rel="noopener noreferrer" href="https://github.com/kkwoka" style={{textDecoration: 'none'}}><i className="fab fa-github-square"></i>   Github</a></p>
                    </div>
                    <div className="col-sm-6">
                        <h1>Contact</h1>
                        {/* <p className="resLink"><i className="fas fa-mobile-alt"></i>    (936) 520.3642</p> */}
                        <p className="resLink"><i className="fas fa-mobile-alt"></i>  <a href="tel:9365203642"> (936) 520.3642 </a></p>
                        <p className="resLink"><i className="far fa-envelope"></i>  <a href="mailto:kendrakwoka@gmail.com"> kendrakwoka@gmail.com </a></p>
                        {/* <p className="resLink"><i className="far fa-envelope"></i> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kendrakwoka@gmail.com&tf=1" target="_blank">    kendrakwoka@gmail.com</a></p> */}
                    </div>
                </div>
            </div>
            {/* <br />
            <br />
            <br />
            <div className="apiHeader">
                <h5 id="apiH5">Thank You For Taking the Time to Check Out My Portfolio!</h5>
                <h6>For some fun, Search for images below:</h6>
                <input id='apiInput' type='text' width='2000px' placeholder="Enter Search Here" />
                <button id="submit" type="submit">Find Pics!</button>
                <br />
            </div>
                
            <div id="apiBox" className="container-fluid"></div> */}
        </div>
    )
}

export default Contact;