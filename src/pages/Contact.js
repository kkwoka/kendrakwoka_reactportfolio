import React from 'react';

function Contact() {
    return (
        <div>
            <div id="main" class="container-sm container-md container-lg container-xl wrapper">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Resources</h1>
                        <p class="resLink"><a class="resLink" target="_blank" rel="noopener noreferrer" href="Assets/Resume 2020 Dev.pdf"><i class="far fa-file-pdf"></i> Resume</a></p>
                        <p class="resLink"><a class="resLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kendra-kwoka-553b68196/" style={{textDecoration: 'none'}}><i class="fab fa-linkedin"></i>  LinkedIn</a></p>
                        <p class="resLink"><a class="resLink" target="_blank" rel="noopener noreferrer" href="https://github.com/kkwoka" style={{textDecoration: 'none'}}><i class="fab fa-github-square"></i>   Github</a></p>
                    </div>
                    <div class="col-sm-6">
                        <h1>Contact</h1>
                        {/* <p class="resLink"><i class="fas fa-mobile-alt"></i>    (936) 520.3642</p> */}
                        <p class="resLink"><i class="fas fa-mobile-alt"></i>  <a href="tel:9365203642"> (936) 520.3642 </a></p>
                        <p class="resLink"><i class="far fa-envelope"></i>  <a href="mailto:kendrakwoka@gmail.com"> kendrakwoka@gmail.com </a></p>
                        {/* <p class="resLink"><i class="far fa-envelope"></i> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kendrakwoka@gmail.com&tf=1" target="_blank">    kendrakwoka@gmail.com</a></p> */}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div class="apiHeader">
                <h5 id="apiH5">Thank You For Taking the Time to Check Out My Portfolio!</h5>
                <h6>For some fun, Search for images below:</h6>
                <input id='apiInput' type='text' width='2000px' placeholder="Enter Search Here" />
                <button id="submit" type="submit">Find Pics!</button>
                <br />
            </div>
                
            <div id="apiBox" class="container-fluid"></div>
        </div>
    )
}

export default Contact;