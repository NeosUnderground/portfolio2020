import React, { Component } from 'react'
import HeaderImg from './images/ServicePageHeader.png'
import {servicesList} from '../ServicesList/servicesList'
import Services from '../ServicesFolder/services'


export default class services_page extends Component {
    render() {
        return (
        <div className='servicesPage'>
            <div className="headerImageWrapper">
                <img src={HeaderImg} alt="" height="auto" width="100%"/>
                <div className="headerImageTextContainer">
                    <h1 className='fontWeight100 dropShadow'>Services</h1>
                    {/* <p className='dropShadow'>AtlasIED is a technology company that can assist an organization's ability to obtain and 
                    retain new talent and create efficiency in workplace processes.</p> */}
                </div>
            </div>

            <Services services={servicesList}/>

         </div>
           
        )
    }
}
