import React, {useEffect} from 'react'
import AuthService from '../services/auth'
import useForm from './hooks/useForm'
import {NavLink} from 'react-router-dom'
import Map from './Map'
function Login (props){
    const [ form, handleInput] =useForm()
    const authService = new AuthService()
    useEffect(()=> {
        const loggedUser = localStorage.getItem('loggedUser')
        if(loggedUser) return props.history.push('/private')
    }, [props.history])
    const handleLogin = () => {
        authService.login(form)
        .then(response => {
            console.log(response)
            localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    return(
        <div className='contents'>
            <section>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleInput}/>
                <NavLink to="/private">

                    <button onClick={handleLogin}>Login</button>
                </NavLink>
            </section>
            <div className='Map'>
                <Map/>
            </div>
        </div>
    )
}
export default Login