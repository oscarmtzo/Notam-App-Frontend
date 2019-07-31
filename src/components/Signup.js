import React from 'react'
import AuthService from  '../services/auth'
import useForm from './hooks/useForm'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from 'rsuite';
import {Link} from 'react-router-dom'
function Signup (props) {
    const [form, handleInput ] =useForm()
    const authService = new AuthService()
    
    const handleSignup = () => {
        authService.signup(form)
        .then(response => {
            console.log(response)
            props.history.push('/login')
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    return(
        <div className="signup">
            
            <Form>
                <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" name="name" id="name" onChange={handleInput}/>
                <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" name="email" id="email" onChange={handleInput}/>
                <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" name="password" id="password" onChange={handleInput}/>
                </FormGroup>
                <FormGroup>
                <ControlLabel>More about you</ControlLabel>
                <FormControl rows={5} name="textarea" componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                <ButtonToolbar>
                    <Link to="/">
                        <Button appearance="primary" onClick={handleSignup}>Submit</Button>
                    </Link>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
        // <div>
        //     <label htmlFor="name">Name</label>
        //     <input type="text" name="name" id="name" onChange={handleInput}/>
        //     <label htmlFor="email">Email</label>
        //     <input type="email" name="email" id="email" onChange={handleInput}/>
        //     <label htmlFor="password">Password</label>
        //     <input type="password" name="password" id="password" onChange={handleInput}/>
        //     <button onClick={handleSignup}>Sing up</button>
        // </div>
    )
}
export default Signup