import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './contentComponents/Home/Home'
import About from './contentComponents/About/About'
import Store from './contentComponents/Store/Store'
import Detail from './contentComponents/Detail/Detail'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/brand/:brand' component={Detail} />
    </Switch>
)

