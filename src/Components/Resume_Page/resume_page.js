import React, { Component } from 'react'
import HeaderImg from './images/ResumePageHeader.png'
import './resume_page.css'

export default class resume_page extends Component {
    render() {
        return (
            <div className='resumePage'>
                <div className="headerImageWrapper">
                    <img src={HeaderImg} alt="" height="auto" width="100%"/>
                    <div className="headerImageTextContainer">
                        <h1 className='fontWeight100 dropShadow'>Resume</h1>
                        {/* <p className='dropShadow'>AtlasIED is a technology company that can assist an organization's ability to obtain and 
                        retain new talent and create efficiency in workplace processes.</p> */}
                    </div>
                </div>
                <div className='flexCenter'>
                    <div className='resumeTextArea'>
                        <div>
                            <p>555 S Galleria Way, Chandler, AZ, 85226</p>
                            <p>(816)304-7973 | <a href='mailto:james.f.kubitz@gmail.com'>James.F.Kubitz@gmail.com</a></p>
                        </div>
                        <div className='educationContainer'>
                            <h2 className='bgOdGreen'>Formal Education</h2>
                            <h3>Columbia College - Columbia, Mo</h3>
                            <p>2018 - Bachelor of Science: Computer Information Systems</p>
                            <h3>Moberly Area Community College - Columbia, Mo</h3>
                            <p>2016 - Associates of Applied Science: Programming </p>
                            <h2 className='bgOdGreen'>Continuing Education</h2>
                            <h3>Udemy</h3>
                            <p>2020 - Become a WordPress Developer: Unlocking Power With Code - In Progress</p>
                            <p>2020 - Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL) - In Progress </p>
                            <p>2019 - The Complete Web Developer in 2021: Zero to Mastery - Complete</p>
                        </div> 
                        <div className='skillsContainer'>
                            <h2 className='bgOdGreen'>Technical Skills</h2>
                            <div className='flexRowToColumn'>
                                <div className='flexColumn'>
                                    <h3>Languages:</h3>
                                        <ul>
                                            <li>Javascript(ES6)</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>SQL</li>
                                        </ul>
                                </div>
                                <div className='flexColumn'>
                                    <h3>Data</h3>
                                        <ul>
                                            <li>PostreSQL</li>
                                            <li>Firebase</li>
                                            <li>MongoDB</li>
                                            <li>RESTful APIs</li>
                                            <li>JSON</li>
                                        </ul>
                                </div>
                                <div className='flexColumn'>
                                    <h3>Libraries</h3>
                                        <ul>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>Express.js</li>
                                            <li>Angular.js</li>
                                            <li>Next.js</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                </div>
                                <div className='flexColumn'>
                                    <h3>Other</h3>
                                        <ul>
                                            <li>GIT</li>
                                            <li>VS Studio/Code</li>
                                            <li>Windows IIS</li>
                                            <li>Heroku</li>
                                            <li>WordPress</li>
                                            <li>Postman</li>
                                            <li>Adobe Products</li>
                                            <li>Google Analytics</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className='workContainer'>
                            <h2 className='bgOdGreen'>Work Experience</h2>
                            <h3 className='ma0'>2019 - Present: AtlasIED - Web Developer</h3>
                            <ul>
                                <li>Maintain and update existing site using NOPCommerce</li>
                                <li>Design UI/UX for new pages</li>
                                <li>Develop pages based off of Illustrator files.</li>
                                <li>Develop micro sites using React.js, Node.js, Express.js, and custom WordPress themes</li>
                                <li>Report site analytics using Google Analytics</li>
                                <li>Collaborate with marketing to define goals and deliverables</li>
                            </ul>
                            <h3 className='ma0 ma40'>2018 - 2019: University of Missouri - Programmer Analyst</h3>
                            <ul>
                                <li>Maintain and update existing web applications using C#, ASP.Net, TFS, and MySQL</li>
                                <li>Develop front end using HTML, CSS, Bootstrap, and Javascript</li>
                                <li>Use SQL server management for databases and tables</li>
                                <li>Perform unit testing and documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
