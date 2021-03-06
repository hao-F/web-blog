import React, {Component} from 'react'
import './layout.scss'
import home from '../pages/home/index'
import user from '../pages/set/user/index'
import menu from '../pages/set/menu/index'
import {Layout, Menu} from 'antd'
import { HomeOutlined, SettingOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
const {Link, Route, Switch, Redirect} = require('react-router-dom')

const { Header, Content, Footer, Sider } = Layout

export default class layout extends Component<any> {

  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
      return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>

            <Menu.Item key="/home" icon={<HomeOutlined />}>
              <Link to="/home">主页</Link>
            </Menu.Item>

            <Menu.SubMenu key="2" title="设置">
              <Menu.Item key="/user" icon={<SettingOutlined />}>
                <Link to="/user">用户管理</Link>
              </Menu.Item>
              <Menu.Item key="/menu" icon={<MenuOutlined />}>
                <Link to="/menu">菜单管理</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background">
                <div className="user-name">
                    <UserOutlined style={{ margin: '5px' }}/>
                    超级管理员
                </div>
            </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Switch>
                <Route exact path="/home" component={home}/>
                <Route exact path="/user" component={user}/>
                <Route exact path="/menu" component={menu} />
                <Redirect from="/*" to="/home" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>帆帆无限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
