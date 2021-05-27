import React from 'react';
import { FaLinux } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { SiNetlify } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { DiMongodb } from 'react-icons/di';
import '../Roadmap/Roadmap.css';

function Roadmap() {
    return (
        <div id="body">
            <h2 className="roadmap-name"><span>Pay IT Forward</span> jamoasining
                 dasturlashni o'rganish xaritasi</h2>

            <div className="image-box-solid-group">
                <div className="image-box-solid"></div>
                <FaLinux className="image-box-solid-icon" />
                <div className="image-box-solid"></div>
            </div>

            <div className="image-box-group">
                <a href="#" target="_blank">
                    <AiFillHtml5 className="icon-group html" />
                    <p>HTML5</p>
                </a>
            </div>

            <div className="image-box-group">
                <div className="image-box">
                    <a href="#" target="_blank">
                        <DiCss3 className="icon-group css" />
                        <p>CSS3</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <DiSass className="icon-group sass" />
                        <p>SASS</p>
                    </a>
                </div>
            </div>
            <div className="image-box-group">
                <div className="image-box">
                    <a href="#" target="_blank">
                        <FaBootstrap className="icon-group bootstrap" />
                        <p>BOOTSTRAP</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <SiNetlify className="icon-group netlify" />
                        <p>NETLIFY</p>
                    </a>
                </div>
            </div>

            <div className="image-box-group">
                <div className="image-box">
                    <a href="#" target="_blank">
                        <FaGitAlt className="icon-group git" />
                        <p>GIT</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <AiFillGithub className="icon-group github" />
                        <p>GITHUB</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <FiCodepen className="icon-group" />
                        <p>CODEPEN</p>
                    </a>
                </div>
            </div>

            <div className="image-box-solid-group">
                <div className="image-box-solid"></div>
                <FaLinux className="image-box-solid-icon" />
                <div className="image-box-solid"></div>
            </div>

            <div className="image-box-group">
                <a href="#" target="_blank">
                    <SiJavascript className="icon-group javascript" />
                    <p>JAVASCRIPT</p>
                </a>
            </div>

            <div className="image-box-group">
                <div className="image-box">
                    <a href="#" target="_blank">
                        <GrReactjs className="icon-group react-js" />
                        <p>REACT JS</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <SiRedux className="icon-group redux" />
                        <p>REDUX</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <SiTypescript className="icon-group typescript" />
                        <p>TYPESCRIPT</p>
                    </a>
                </div>
            </div>

            <div className="image-box-group">
                <div className="image-box">
                    <a href="#" target="_blank">
                        <GrNode className="icon-group nodejs" />
                        <p>NODEJS</p>
                    </a>
                </div>
                <div className="image-box">
                    <a href="#" target="_blank">
                        <DiMongodb className="icon-group mongodb" />
                        <p>MONGODB</p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Roadmap;