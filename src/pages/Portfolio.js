import React from 'react';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

function Portfolio() {
    return (
        <div id="main" class="container-xs container-sm container-md container-lg container-xl wrapper container-fluid">
            <div class="row">
                <Technologies />
            </div>
            <div class="row portCenter">
                <h1 class="col-sm-12">Portfolio</h1>
                <div class="container-xs container-sm container-md container-lg container-xl wrapper">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;