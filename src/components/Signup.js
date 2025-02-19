import React from 'react'
import AuthService from  '../services/auth'
import useForm from './hooks/useForm'
import Map from './Map'

function Signup (props) {
    const [form, handleInput ] =useForm()
    const authService = new AuthService()
    
    const handleSignup = () => {
        authService
        .signup(form)
        .then(response => {
            console.log(response)
            props.history.push('/login')
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    return(
        <div className='contents'>
            <section>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleInput}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleInput}/>
                <button onClick={handleSignup}>Sing up</button>
            </section>
            <div className='Map'>
                <Map/>
            </div>
        </div>
    )
}
export default Signup