import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderImg from './images/HomePageHeader.png'
import {projectList} from '../projectCard/projectList';
import Projects from '../projects/projects';
import FlipMove from 'react-flip-move';
import AOS from 'aos'
import LazyHero from 'react-lazy-hero';


import Angular from './images/Angular.png'
import Bootstrap from './images/bootstrap.png'
import CSharp from './images/Csharp.jpg'
import CSS from './images/CSS.png'
import Express from './images/ExpressJs.png'
import Firebase from './images/Firebase.png'
import Gmail from './images/Gmail.png'
import Heroku from './images/Heroku.png'
import HTML from './images/html.png'
import Illistrator from './images/Illustrator.png'
import Javascript from './images/Javascript.png'
import MongoDB from './images/MongoDB.png'
import Node from './images/NodeImg.png'
import Photoshop from './images/Photoshop.png'
import Premiere from './images/Preimere.png'
import Postgress from './images/Postgress.png'
import Postman from './images/Postman.png'
import ReactImg from './images/reactImg.png'
import ReduxImg from './images/Redux.png'
import Github from './images/GitHub.png'
import Linkedin from './images/Linkedin.jpg'
import WindowsIIS from './images/WindowsIIS.png'
import NEXT from './images/next_logo.png'
import VsCode from './images/VSCode.png'
import HTMLImage from './images/HTMLImg.png'
import ProgrammingImage from './images/programming.jpg'
import ComputerHands from './images/computerHands.jpg'
import WhiteDesk from './images/whiteDesk.jpg'
import ClickToShuffle from './images/ClickToShuffle.png'

export default class home_page extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state={
          
        };
      }

    render() {
        

        
        return (
            <div className='homePage'>
            <LazyHero 
                imageSrc={HeaderImg}
                minHeight='100vh'
                opacity='.5'
                color='black'
                parallaxOffset='100'
                transitionDuration='0'
            >
                <h1 className='dropShadows'>Developing Ideas Into Reality</h1>
            </LazyHero>
          
                <div className='textContainerImageRight' data-aos='fade-down'>
                        <div className='textAreaImageRight'>
                            <p>
                            Highly motivated full stack developer who is actively improving my skillset through projects and continual, self-taught, education with a passion for writing clean and reusable code. Quick leaner with an analytical mind and an eye for exceptional design with the ability to collaborate with those around me using clear and effective communication. Goal driven individual with an attention to detail who strives for producing above satisfactory results within a given deadline.                            </p>
                        </div>
                    <img src={ComputerHands} alt="" />
                </div>
                <div className='textContainerImageLeft' data-aos='fade-up'>
                    <img src={WhiteDesk} alt="" />
                        <div className='textAreaImageLeft'>
                            <p>
                               Four years experiece with web development icluding: wireframing, front-end development, back-end development, UI/UX design, WordPress, WooCommerce, and marketing. I obtained an Associate’s Degree in Programming and Bachelor’s Degree in Information Systems, along with completing numerous web development courses covering HTML, CSS, Javascript, MERN, MEAN, C#.NET CORE, WordPress, and SQL. 
                            </p>
                        </div>
                </div>
                <div className='textArea ' data-aos='fade-down'>
                    <p className='centerText'>
                        My skillset can assist with maintaining, upgrading, or getting your website off the ground. You can find information about my freelance services <Link style={{textDecoration:'none'}} to='/Services'><span className='OdGreen md-24' ><strong>here.</strong></span></Link> If you are interested in viewing my resume you can find it <Link style={{textDecoration:'none'}} to='/Resume'><span className='OdGreen md-24' ><strong>here.</strong></span></Link> I am open to both employment and freelance work, if you are interesting in a FREE consultation you can <Link style={{textDecoration:'none'}} to='/Contact'><span className='OdGreen md-24' ><strong>Contact Me Today!</strong></span></Link>
                    </p>
                </div>

                {/* A JSX comment 
                 json dev homepage
                "homepage": "https://neosunderground.github.io/portfolio2020/",
            
            */}
           
                <h1 data-aos='fade-up'>Technical Experience</h1>

                    <div className='technologiesWrapper '>
                        
                        <div className='container growBorderRadius' data-aos='fade-down' data-aos-offset="0">
                            <h2>Back-End</h2>
                                <ul>
                                    <li>Express Js</li>
                                    <li>Node Js</li>
                                    <li>MongoDB</li> 
                                    <li>Firebase</li>
                                    <li>PostgreSQL</li>
                                    <li>RESTful-APIs</li>
                                    <li>Windows-IIS</li> 
                                    <li>WooCommerce</li>
                                </ul>
                        </div>
                        <div className='container growBorderRadius' data-aos='fade-up'>
                            <h2>Front-End</h2>
                                <ul>
                                    <li>Angular JS</li>
                                    <li>Bootstrap</li>
                                    <li>CSS - Grid/Flex</li>
                                    <li>HTML</li>
                                    <li>Javascript</li>
                                    <li>JSX</li>
                                    <li>Next JS</li> 
                                    <li>React JS</li>
                                    <li>Redux JS </li>    
                                    <li>UI/UX Design</li> 
                                    <li>WordPress</li>                                                                                        
                                </ul>
                        </div>
                        <div className='container growBorderRadius' data-aos='fade-down'>
                        <h2>Tools</h2>
                            <ul>
                                <li>Github</li>
                                <li>Heroku</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>Postman</li>
                                <li>Premiere</li>
                                <li>Vs Code</li>                                                                               
                            </ul>
                    </div>
                </div>
               


            <div className='iconWrapper' >    
                    <div className='iconGroup'>
                        <img className='skillIcon grow pointer' src={CSS} key="img1" alt='' data-aos="zoom-out-down" data-aos-delay="600" />
                        <img className='skillIcon grow pointer' src={ReactImg} key="img2" alt='' data-aos="zoom-out-down" data-aos-delay="700"  />
                        <img className='skillIcon grow pointer' src={HTML} key="img3"alt='' data-aos="zoom-out-down" data-aos-delay="700" />
                        <img className='skillIcon grow pointer' src={NEXT} key="img4" alt='' data-aos="zoom-out-down" data-aos-delay="750" />
                        <img className='skillIcon grow pointer' src={ReduxImg} key="img5" alt='' data-aos="zoom-out-down" data-aos-delay="800" />
                    </div>
                    <div className='iconGroup'>
                        <img className='skillIcon grow pointer' src={Express} key="img6" alt='' data-aos="zoom-out-down" data-aos-delay="1100" />
                        <img className='skillIcon grow pointer' src={Node} key="img7" alt='' data-aos="zoom-out-down" data-aos-delay="1150" />
                        <img className='skillIcon grow pointer' src={MongoDB} key="img8" alt='' data-aos="zoom-out-down" data-aos-delay="1200" />
                        <img className='skillIcon grow pointer' src={WindowsIIS} key="img9" alt='' data-aos="zoom-out-down" data-aos-delay="1250" />
                        <img className='skillIcon grow pointer' src={Firebase}key="img10" alt='' data-aos="zoom-out-down" data-aos-delay="1300" />
                        <img className='skillIcon grow pointer' src={Postgress}key="img11"alt='' data-aos="zoom-out-down" data-aos-delay="1350" />
                        <img className='skillIcon grow pointer' src={Javascript}key="img12"alt='' data-aos="zoom-out-down" data-aos-delay="1400" />
                    </div>
                    <div className='iconGroup'>
                        <img className='skillIcon grow pointer' src={Angular}key="img13" alt='' data-aos="zoom-out-down" data-aos-delay="1450" />
                        <img className='skillIcon grow pointer' src={Bootstrap}key="img14" alt='' data-aos="zoom-out-down" data-aos-delay="1500" />
                        <img className='skillIcon grow pointer' src={Github}key="img15" alt='' data-aos="zoom-out-down" data-aos-delay="1550" />
                        <img className='skillIcon grow pointer' src={Heroku}key="img16" alt='' data-aos="zoom-out-down" data-aos-delay="1600" />
                        <img className='skillIcon grow pointer' src={Illistrator}key="img17" alt='' data-aos="zoom-out-down" data-aos-delay="1650"/>
                        <img className='skillIcon grow pointer' src={Photoshop}key="img187" alt='' data-aos="zoom-out-down" data-aos-delay="1700" />
                        <img className='skillIcon grow pointer' src={Premiere}key="img19" alt='' data-aos="zoom-out-down" data-aos-delay="1750"/>
                        <img className='skillIcon grow pointer' src={Postman}key="img20" alt='' data-aos="zoom-out-down" data-aos-delay="1800" />
                        <img className='skillIcon grow pointer' src={VsCode}key="img21"alt='' data-aos="zoom-out-down" data-aos-delay="1850"/>
                    </div>     
            </div>               
            <div className='projectsWrapper'>
                <h1 data-aos='fade-up' >Past Projects</h1>
                <Projects projects={projectList}/>
            </div>
    </div>
        )
    }
}
