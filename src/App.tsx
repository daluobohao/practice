import React from "react";
import JS from "./Components/JS";
import ReactComponents from "./Components/ReactComponents";
import Test from "./Test";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
const { Header } = Layout;
class App extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <Router>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                {" "}
                <Link to="/components">react</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/javascript">javascript</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/test">test</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Switch>
            <Route path="/components">
              <ReactComponents />
            </Route>
            <Route path="/javascript">
              <JS />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
