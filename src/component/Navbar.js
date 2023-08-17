import React from 'react'
import logo from "../img/logo.png"
import menu from "../img/menu.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
function Navbar() {
   const [clicked , setClicked] = useState(false)
  return (
    <div className='navbar'>
        <div className='right'>
            <img src={logo} width="250px" className='logo'/>
        </div>
        <div className="midlle_nav0">
            <div className='element0'>FALCON9</div>
            <div className='element0'>FALCON HEAVY</div>
            <div className='element0'>DRAGON</div>
            <div className='element0'>STARSHIP</div>
            <div className='element0'>HUMAN SPACELIGHT</div>
            <div className='element0'>RIDESHARE</div>
            <div className='element0'>STARSHELD</div>
            <div className='element0'>STARLINK</div>
        </div>
        <div className='left'>
            <div className='element0'>SHOP</div>
            <div className='element' >
                <div className='element2' onClick={()=>{setClicked(!clicked)}}><img src={menu} width="40px" height="40px" className='menu'/></div>
                <div className={clicked ? "show_element" : "hiden_element"}>
                    <div className='menu0'>MISSION</div>
                    <div className='menu0'>LAUNCHES</div>
                    <div className='menu0'>CAREERS</div>
                    <div className='menu0'>UPDATES</div>
                    <div className='menu0'>SHOP</div>
                    <div className='midlle_nav1'>
                        <div className='element1'>FALCON9</div>
                        <div className='element1'>FALCON HEAVY</div>
                        <div className='element1'>DRAGON</div>
                        <div className='element1'>STARSHIP</div>
                        <div className='element1'>HUMAN SPACELIGHT</div>
                        <div className='element1'>RIDESHARE</div>
                        <div className='element1'>STARSHELD</div>
                        <div className='element1'>STARLINK</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar