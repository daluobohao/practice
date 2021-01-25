import React from 'react'
import JS from './Componets/JS'
import ReactComponents from './Componets/ReactComponents'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/react'>react</Link>
              </li>
              <li>
                <Link to='/javascript'>javascript</Link>
              </li>
              <li>
                <Link to='/test'>test</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/react'>
              <ReactComponents />
            </Route>
            <Route path='/javascript'>
              <JS />
            </Route>
            <Route path='/test'>
              test
            </Route>
            <Route path='/'>
              home
            </Route>
          </Switch>
        </div>
      </Router>
    )};
}
export default App