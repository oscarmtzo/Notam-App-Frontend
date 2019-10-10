import React from 'react'
import { BrowserRouter, Switch ,Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';

import Private from "./components/Private";
import Login from './components/Login';
const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/private" component={Private}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
        </BrowserRouter>
    )

}
export default Router