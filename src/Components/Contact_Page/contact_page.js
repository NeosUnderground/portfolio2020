import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';
import HeaderImg from './images/ContactPageHeader.png'
import './contact_page.css'
import InputForm from '../inputForm/inputForm'

export default class contact_page extends Component {
    render() {
        return (
            <div className='contactPage'>
                <LazyHero 
                    imageSrc={HeaderImg}
                    minHeight='110vh'
                    opacity='.5'
                    color='black'
                    parallaxOffset='100'
                    className='contactHeaderImg'
                    transitionDuration='0'
                    >
                    <InputForm/>                
                </LazyHero>
            </div>
        )
    }
}
