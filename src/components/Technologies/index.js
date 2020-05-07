import React from 'react';
import vuePic from '../../Assets/Images/vuejs.png';
import jsPic from '../../Assets/Images/js.png';
import oopPic from '../../Assets/Images/js-product.png';
import jqueryPic from '../../Assets/Images/jquery.png';
import npmPic from '../../Assets/Images/Npm-logo.svg';
import mysqlPic from '../../Assets/Images/mysql.png';
import nodePic from '../../Assets/Images/nodejs.png';
import expressPic from '../../Assets/Images/express-min.png';
import monogoPic from '../../Assets/Images/mongodb.png';
import indexPic from '../../Assets/Images/indexeddb.png';
import nosqlPic from '../../Assets/Images/nosql.png';
import sequelizePic from '../../Assets/Images/sequelize.png';
import bootstrapPic from '../../Assets/Images/bootstrappng.png';
import pwaPic from '../../Assets/Images/PWA.png';
import ajaxPic from '../../Assets/Images/ajax.png';
import githubPic from '../../Assets/Images/github.svg';
import cssPic from '../../Assets/Images/CSS3.png';
import htmlPic from '../../Assets/Images/HTML5.png';
import reactPic from '../../Assets/Images/reactjs.png';
import mernPic from '../../Assets/Images/mern.png';
import './style.css';

function Technologies() {
    return (
        <div className="card" id="knowImgs">
            <div className="card-body">
                <div className=" text-center">
                    <img alt="vue" src={vuePic} className="badges" />
                    <img alt="react" id="react" src={reactPic} className="badges" />
                    <img alt="js" src={jsPic} className="badges" />
                    <img alt="oop" src={oopPic} className="badges" id="oop" />
                    <img alt="jquery" src={jqueryPic} className="badges" />                    
                    <img alt="npm" src={npmPic} className="badges" id="npm" />    
                    <img alt="mysql" src={mysqlPic} className="badges" id="mysql" />
                    <img alt="nodejs" src={nodePic} className="badges" id="nodejs" />
                    <img alt="express" src={expressPic} className="badges" id="expressjs" />
                    <img alt="mongodb" src={monogoPic} className="badges" id="mongodb" />
                    <img alt="react" id="mern" src={mernPic} className="badges" />
                    <img alt="indexeddb" src={indexPic} className="badges" id="indexeddb" />
                    <img alt="nosql" src={nosqlPic} className="badges" id="nosql" />
                    <img alt="sequelize" src={sequelizePic} className="badges"vid="sequelize" />                            
                    <img alt="bootstrap" src={bootstrapPic} className="badges" id="bootstrap" />
                    <img alt="pwa" src={pwaPic} className="badges" id="pwa" />
                    <img alt="ajax" src={ajaxPic} className="badges" id="ajax" />
                    <img alt="github" src={githubPic} className="badges" id="github" />
                    <img alt="css" src={cssPic} className="badges" id="css" />
                    <img alt="html" src={htmlPic} className="badges" id="html" />
                </div>
            </div>
        </div>
    )
}

export default Technologies;