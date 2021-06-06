import React from "react";
import Array from "./array";
import Sort from "./Sort";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ALGORITHM } from "../constants";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "antd/dist/antd.css";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class JS extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <Router>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>js-home</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to={`/javascript`}>js-home</Link>
                </Menu.Item>
                <Menu.Item key="2" className="Item">
                  <Link to={`/${ALGORITHM}/array`}>array</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to={`/${ALGORITHM}/sort`}>sort</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to={`/${ALGORITHM}/function`}>function</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>content</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path={`/${ALGORITHM}/array`}>
                  <Array />
                </Route>
                <Route path={`/${ALGORITHM}/sort`}>
                  <Sort arr={[2, 4, 9, 1, 6, 73, 43, 11, 55, 22, 12]} />
                </Route>
                <Route path={`/${ALGORITHM}/function`}>function</Route>
                <Route exact path={`/javascript`}>
                  js-home
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}
