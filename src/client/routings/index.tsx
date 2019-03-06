import * as React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Counter from '../pages/counter'

var MainRouting = () => (
    <Switch>
        <Route path="/" component={Counter} />
    </Switch>
);

export default MainRouting;