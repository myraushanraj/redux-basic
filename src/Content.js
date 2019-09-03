import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import App2 from './App2'

export default class Content extends Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route path="/tt" component={App} />
                    <Route path="/app2" component={App2} />
                </Switch>
            </BrowserRouter>
        )
    }
}
