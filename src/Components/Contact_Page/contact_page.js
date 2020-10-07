import React, { Component } from 'react'
import HeaderImg from './images/ContactPageHeader.png'
import './contact_page.css'

export default class contact_page extends Component {
    render() {
        return (
            <div className='contactPage'>
                <div className="headerImageWrapper">
                    <img src={HeaderImg} alt="" height="auto" width="100%"/>
                    <div className="headerImageTextContainer">
                        <h1 className='fontWeight100 dropShadow'>Contact</h1>
                        {/* <p className='dropShadow'>AtlasIED is a technology company that can assist an organization's ability to obtain and 
                        retain new talent and create efficiency in workplace processes.</p> */}
                    </div>
            </div>

                <div className='textArea'>
                    <p>
                        My name is James Kubitz. I’m an ambitious web developer who is actively improving my skillset. I am eager to continuously learn about my field of study and stay up to date with the latest technologies, often spending hours conducting independent research and teaching myself. Programming is a passion of mine as I enjoy the satisfaction of turning a concept into reality, taking pride in the finished product.                    
                    </p>
                </div>
            </div>
        )
    }
}
