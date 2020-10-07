import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './nav.css'


import logo from './images/James Kubitz_Logo.png'


export default class nav extends Component {
    constructor(props){
        super(props);
        this.state={
            style : {
                height : 0 //initial state for height of overlay to 0 (sow its not showing)
            }  
        };
        this.openNav = this.openNav.bind(this);  //binds the actions 
        this.closeNav = this.closeNav.bind(this); //binds the actions 
    }

    componentDidMount() {
        document.addEventListener('click', this.OpenNav);
    }
    //mounts the event handlers to page on load
    componentWillUnmount() {
        document.removeEventListener('click', this.closeNav);
    }
    //method to update the state to height of 100% to show the nav overlay when the menu icon is clicked
    openNav() {
        const style = { height : '100%' };
        this.setState({ style });     
        document.addEventListener('click', this.OpenNav);
    }
    //method to update the state to height of 0 to hide the nav overlay when the exit icon is clicked
    closeNav() {
        document.removeEventListener('click', this.closeNav);
        const style = { height : 0 };
        this.setState({ style });     
    }

    render() {
        return (
            <nav className='sticky'>
                <Link to="/"><img className='logo' src={logo} alt='jamesKubitz logo'></img> {/* Logo Img */}</Link>
                    <span className='navIcon' onClick={this.openNav}><i className= 'material-icons-round md-60 OdGreen'>menu</i></span> 
                        <div ref= 'snav' className= 'overlay' style= {this.state.style} >   {/* overlay div, updates state to height = 100%||0% to display||hide overlay */}                 
                            <a href= "javascript:void(0)" className= "closebtn" onClick= {this.closeNav} > × </a> {/* invokes the close.nav method to close nav overlay onClick */} 
                            <div className= 'sidenav-container'> {/* Main nav overlay contenct div, split into top and bottom sections */} 
                                <ul className='navItems'>
                                    <Link style={{textDecoration:'none'}} to='/'> {/* uses react-router-dom to for page navigation */} 
                                        <li onClick= {this.closeNav} className=' grow OdGreen OdGreenHover'>Home</li> {/* onClick closes nav and takes you to page */} 
                                    </Link>            
                                    <Link style={{textDecoration:'none'}} to='/Services'>
                                        <li onClick= {this.closeNav} className='grow OdGreen OdGreenHover'>Services</li> 
                                    </Link>              

                                    <Link style={{textDecoration:'none'}} to='/Resume'>
                                        <li onClick= {this.closeNav} className='grow OdGreen OdGreenHover'>Resume</li>
                                    </Link>
                                    <Link style={{textDecoration:'none'}} to='/Contact'>
                                        <li onClick= {this.closeNav} className='grow OdGreen OdGreenHover'>Contact</li>
                                    </Link>
                                    {/* <Link style={{textDecoration:'none'}} to='/About'>
                                        <li onClick= {this.closeNav} className='grow blueHover'>About</li>
                                    </Link>*/}
                                </ul> 
                            </div> 
                        </div>
            </nav>
        )
    }




}
