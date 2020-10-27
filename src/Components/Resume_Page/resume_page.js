import React, { Component } from 'react'
import HeaderImg from './images/ResumePageHeader.png'
import ResumeImg from './images/resumeImg.PNG'
import './resume_page.css'
import LazyHero from 'react-lazy-hero';

export default class resume_page extends Component {
    render() {
        return (
            <div className='resumePage'>
            <LazyHero 
                imageSrc={HeaderImg}
                minHeight='100vh'
                opacity='.5'
                color='black'
                parallaxOffset='100'
            >
                <h1 className='dropShadows'>Resume</h1>
            </LazyHero>
              
                <div className='flexCenter'>
                    <div className='resumeImageContainer grow3'>
                        <img src={ResumeImg}/>
                    </div>
                </div>
            </div>
        )
    }
}
