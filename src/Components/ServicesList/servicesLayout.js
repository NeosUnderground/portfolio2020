import React, { Component } from 'react'

const ServicesLayout =({heading, description})=>{

    return(
            <div>
                <h3>{heading}</h3>
                    <p>
                       {description}                    
                    </p>
                <br/>
            </div>
    )
}

export default ServicesLayout;