import React from 'react'

import EditableTable from './AddAirports'
import Map  from './Map'
import AuthService from '../services/auth';
import {NavLink} from 'react-router-dom'
function Private (props){
    const authService = new AuthService()
    const handleLogout = () => {
        authService
            .logout()
            .then(()=> {
                localStorage.removeItem('loggedUser')
                props.history.push('/login')})
            .catch(err=> console.log(err))
    }
    return(
        <div className='contents'>
            <section>
                <EditableTable/>
                <NavLink to='/search'>
                    <button>home</button>
                </NavLink>
                <button onClick={handleLogout}>Logout</button>
            </section>
            <div className='Map'>
                <Map/>
            </div>
        </div>
    )
}
export default Private
