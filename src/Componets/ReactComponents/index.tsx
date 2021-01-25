import React from 'react'
import TestSelect from './select'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
export default class ReactComponents extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to='/'>component-home</Link>
                        </li>
                        <li>
                        <Link to='/select'>select</Link>
                        </li>
                    </ul>
                    </nav>
                    <Switch>
                    <Route path='/select'>
                        <TestSelect/>
                    </Route>
                    <Route path='/'>
                        component-home
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
        
    }
}