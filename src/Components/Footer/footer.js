import React, { Component } from 'react'
import Github from './images/GitHub.png'
import LinkedIn from './images/LinkedIn.png'
import './footer.css'

export default class footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    <a href='https://github.com/NeosUnderground' target='_blank'><img src={Github} className='skillIcon grow'/></a>
                    <a href='https://www.linkedin.com/in/jameskubitz/' target='_blank'><img src={LinkedIn} className='skillIcon grow'/></a>
                </div>
            </div>
        )
    }
}

