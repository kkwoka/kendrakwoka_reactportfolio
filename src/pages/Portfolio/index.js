import React from 'react';
import Technologies from '../../components/Technologies/index';
import Projects from '../../components/Projects/index';

// const initialState = {
//     projects: [],
//     currentProject: {}
// }

function Portfolio() {
    return (
        <div id="main" className="container-xs container-sm container-md container-lg container-xl wrapper container-fluid">
            <div className="row">
                <Technologies />
            </div>
            <div className="row portCenter">
                <h1 className="col-sm-12">Portfolio</h1>
                <div className="container-xs container-sm container-md container-lg container-xl wrapper">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;