import React, { Component } from 'react'
import HeaderImg from './images/ServicePageHeader.png'
import {servicesList} from '../ServicesList/servicesList'
import Services from '../ServicesFolder/services'
import LazyHero from 'react-lazy-hero';


export default class services_page extends Component {
    render() {
        return (
        <div className='servicesPage'>
        <LazyHero 
            imageSrc={HeaderImg}
            minHeight='100vh'
            opacity='.5'
            color='black'
            parallaxOffset='100'
            transitionDuration='0'
        >
            <h1 className='dropShadows'>Services</h1>
        </LazyHero>

            <Services services={servicesList}/>

         </div>
           
        )
    }
}
