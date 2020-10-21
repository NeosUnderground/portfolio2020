import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ServicesLayout from '../ServicesList/servicesLayout'

const Services=({services})=>{
    
    const servicesComponent = services.map((service, i)=>{
        return <ServicesLayout
                        id={services[i].id}
                        heading={services[i].heading}
                        description={services[i].description}        
        />
    })
    return (
        <div className='textArea'>
            <h1 className='OdGreen'>What I Offer</h1>
            <br/>
            <p>If you are interested in any of the following services be sure to  <Link style={{textDecoration:'none'}} to='/Contact'><span className='OdGreen md-24 OdGreenHover' ><strong>Contact Today</strong></span></Link> for a free consultation where we can discuss your goals and decide which options best suit your needs. </p>
            <br/>
            {servicesComponent}
        </div>
    );
}

export default Services;