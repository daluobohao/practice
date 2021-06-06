import React from "react";
import TestSelect from "./select";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TagInput from "./TagInput/TagInput";
import StarRating from "./StarRating/index";
import { COMPONENTS } from "../constants";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "antd/dist/antd.css";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class ReactComponents extends React.Component<any, any> {
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
                    <span>component</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to={`/${COMPONENTS}`}>component-home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={`/${COMPONENTS}/tag-input`}>tag-input</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to={`/${COMPONENTS}/star-rating`}>star-rating</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    <span>select</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to={`/${COMPONENTS}/select`}>select</Link>
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
                <Route path={`/${COMPONENTS}/select`}>
                  <TestSelect />
                </Route>
                <Route path={`/${COMPONENTS}/tag-input`}>
                  <TagInput tags={["nodejs"]} />
                </Route>
                <Route path={`/${COMPONENTS}/star-rating`}>
                  <StarRating value={2} />
                </Route>
                <Route exact path={`/${COMPONENTS}`}>
                  component-home
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}
