import React from 'react'
import Array from './array'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
export default class JS extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to='/'>js-home</Link>
                        </li>
                        <li>
                        <Link to='/array'>array</Link>
                        </li>
                        <li>
                        <Link to='/algorithm'>algorithm</Link>
                        </li>
                        <li>
                        <Link to='/function'>function</Link>
                        </li>
                    </ul>
                    </nav>
                    <Switch>
                    <Route path='/array'>
                        <Array />
                    </Route>
                    <Route path='/algorithm'>
                        algorithm
                    </Route>
                    <Route path='/function'>
                        function
                    </Route>
                    <Route path='/'>
                        js-home
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
        
    }
}