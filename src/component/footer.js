import React from 'react'
import "./style.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='copy_right'>
            SPACEX &copy; 2023
        </div>
        <div className='social_media'>
            <div className='element3'>TWITTER</div>
            <div className='element3'>YOUTUBE</div>
            <div className='element3'>INSTAGRAM</div>
            <div className='element3'>FLICKER</div>
            <div className='element3'>LINKEDIN</div>
        </div>
        <div className='privacy'>
            <div className='element3'>PRIVACY POLICY</div>
            <div className='element3'>SUPPLIERS</div>
        </div>
    </div>
  )
}

export default Footer;