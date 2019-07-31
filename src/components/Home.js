import React from 'react'
import Map from './Map'

import {NavLink} from 'react-router-dom'

//import '../App.css'
import { Dropdown} from 'rsuite';
const Home = () =>{
    
    return(
        <div id="contents">
            <div style={{height: '5vh'}}>
                <Dropdown title="Menu" id="menu-contents" style={{height: '5vh', width: '5vw'}}>
                    <NavLink to="/login">Login</NavLink>
                    <br/>
                    <br/>
                    <NavLink to="/signup">Signup</NavLink>

                </Dropdown>

            </div>
            <Map/>
            
        </div>
    )
}
export default Home

