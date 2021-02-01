import React from 'react'
import TestSelect from './select'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class ReactComponents extends React.Component<any, any>{
    render() {
        return (
            <Layout>
            <Router>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
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
                  <Menu.Item key="1"><Link to='/'>component-home</Link></Menu.Item>
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
                  <Menu.Item key="5"><Link to='/select'>select</Link></Menu.Item>
                </SubMenu>  
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>content</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route path='/select'>
                      <TestSelect/>
                  </Route>
                  <Route path='/'>
                      component-home
                  </Route>
                </Switch>
              </Content>
            </Layout>
            </Router>
          </Layout>
        )
        
    }
}