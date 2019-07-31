import React from 'react'
import { BrowserRouter, Switch ,Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import EditableTable from './components/AddAirports';

const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/addairport" component={EditableTable}/>
        </Switch>
        </BrowserRouter>
    )

}
export default Router