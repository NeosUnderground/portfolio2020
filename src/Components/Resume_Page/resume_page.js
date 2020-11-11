import React, { Component } from 'react'
import HeaderImg from './images/ResumePageHeader.png'
import ResumeImg from './images/resumeImg.PNG'
import FileIconImg from './images/FiletypeIcon.png'



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
                transitionDuration='0'
            >
                <h1 className='dropShadows'>Resume</h1>
            </LazyHero>
              
                <div className='flexCenter'>
                    <div className='resumeImageContainer'>
                       <img src={ResumeImg} alt='James Kubitz Resume'/>
                    </div>
                    <h1>View and Download:</h1>
                    <a href='https://drive.google.com/file/d/1lCkZ77iHMupkEkM8O6onu0RCxgz5kf2S/view?usp=sharing' rel="noopener noreferrer" target='_blank'> <img src={FileIconImg} alt='fileDownload' className='fileIcon grow pointer'></img></a>
                </div>
            </div>
        )
    }
}
