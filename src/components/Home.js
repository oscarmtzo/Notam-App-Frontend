import React from 'react'
import Map from './Map'

import {NavLink} from 'react-router-dom'

//import '../App.css'
import { Dropdown} from 'rsuite';
const Home = () =>{
    
    return(
        <div className='contents'>
            <section>
                <Dropdown title="Menu" id="menu-contents" style={{height: '5vh', width: '5vw'}}>
                    <NavLink to="/login">Login</NavLink>
                    <br/>
                    <br/>
                    <NavLink to="/signup">Signup</NavLink>

                </Dropdown>

            </section>
            <div className='Map'>
                <Map/>
            </div>
            
        </div>
    )
}
export default Home

