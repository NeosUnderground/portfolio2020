import React, { Component } from 'react'
import HeaderImg from './images/HomePageHeader.png'
import htmlImg from './images/HTMLImg.png'
import {projectList} from '../projectCard/projectList';
import Projects from '../projects/projects';
import FlipMove from 'react-flip-move';
import AOS from 'aos'


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
        
       
        
            
                <div className="headerImageWrapper">
                    <img src={HeaderImg} alt="" height="auto" width="100%"/>
                    <div className="headerImageTextContainer">
                        <h1 className='fontWeight100 dropShadow'>Developing Ideas Into Reality</h1>
                        {/* <p className='dropShadow'>AtlasIED is a technology company that can assist an organization's ability to obtain and 
                        retain new talent and create efficiency in workplace processes.</p> */}
                    </div>
                </div>

                <div className='textContainerImageRight' data-aos='fade-right'>
                        <div className='textAreaImageRight'>
                            <p>
                                My name is James Kubitz. I’m an ambitious web developer who is actively improving my skillset. I am eager to continuously learn about my field of study and stay up to date with the latest technologies, often spending hours conducting independent research and teaching myself. Programming is a passion of mine as I enjoy the satisfaction of turning a concept into reality, taking pride in the finished product.                    
                            </p>
                        </div>
                    <img src={ComputerHands} alt="" />
                </div>
                <div className='textContainerImageLeft' data-aos='fade-left'>
                    <img src={WhiteDesk} alt="" />
                        <div className='textAreaImageLeft'>
                            <p>
                                I have been doing web development for 5 years and have experience with wireframing, front-end development, back-end development, UI/UX design, WordPress, WooCommerce, and marketing. I obtained an Associate’s Degree in Programming and Bachelor’s Degree in Information Systems, along with completing numerous web development courses covering HTML, CSS, Javascript, MERN, MEAN, C#.NET CORE, WordPress, and SQL. 
                            </p>
                        </div>
                    
                </div>

  {/* A JSX comment */}
               {/*  <div className='textArea' data-aos='fade-up'>
                        <p>
                          My name is James Kubitz. I’m an ambitious web developer who is actively improving my skillset. I am eager to continuously learn about my field of study and stay up to date with the latest technologies, often spending hours conducting independent research and teaching myself. Programming is a passion of mine as I enjoy the satisfaction of turning a concept into reality, taking pride in the finished product.                    
                        </p>
                        <p>
                        I have been doing web development for 5 years and have experience with wireframing, front-end development, back-end development, UI/UX design, WordPress, WooCommerce, and marketing. I obtained an Associate’s Degree in Programming and Bachelor’s Degree in Information Systems, along with completing numerous web development courses covering HTML, CSS, Javascript, MERN, MEAN, C#.NET CORE, WordPress, and SQL.
                        </p>
                        <p>
                            My skillset can assist with maintaining your website, upgrading your site, or getting it off the ground. I am open to both employment and freelance work. You can find information about my services here.
                        </p>
                </div>*/}
                <h1 data-aos='fade-up'>Technical Experience</h1>

                    <div className='technologiesWrapper '>
                        
                        <div className='container growBorderRadius' data-aos='fade-left' data-aos-offset="0">
                            <h2>Back-End</h2>
                                <ul>
                                    <li>Express Js</li>
                                    <li>Node Js</li>
                                    <li>MongoDB</li> 
                                    <li>Firebase</li>
                                    <li>PostgreSQL</li>
                                    <li>RESTful-APIs</li>
                                    <li>Windows-IIS</li> 
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
                                    <li>Redux </li>    
                                    <li>UI/UX Design</li>                                                                                         
                                </ul>
                        </div>
                        <div className='container growBorderRadius' data-aos='fade-right'>
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
               


            <div className='iconWrapper' key="img1">
                <div >
                    {/*<img className='clickToShuffle grow pointer' src={ClickToShuffle} alt=''/>*/}
                </div>
                <FlipMove >               
                    <div className='iconGroup'>
                        <img className='skillIcon grow pointer' src={CSS} key="img1" alt='' data-aos="zoom-out-down" data-aos-delay="800" />
                        <img className='skillIcon grow pointer' src={ReactImg} key="img2" alt='' data-aos="zoom-out-down" data-aos-delay="850"  />
                        <img className='skillIcon grow pointer' src={HTML} key="img3"alt='' data-aos="zoom-out-down" data-aos-delay="950" />
                        <img className='skillIcon grow pointer' src={NEXT} key="img4" alt='' data-aos="zoom-out-down" data-aos-delay="1000" />
                        <img className='skillIcon grow pointer' src={ReduxImg} key="img5" alt='' data-aos="zoom-out-down" data-aos-delay="1050" />
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
                </FlipMove> 
            </div>               
            <div className='projectsWrapper'>
                <h1 data-aos='fade-up' >Past Projects</h1>
                <Projects projects={projectList}/>
            </div>
    </div>
        )
    }
}
