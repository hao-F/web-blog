import React, {Component} from 'react'
import './layout.scss'
import home from '../pages/home/index'
import user from '../pages/set/user'
import {Layout, Menu} from 'antd'
import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
const {Link, Route} = require('react-router-dom')

const { Header, Content, Footer, Sider } = Layout

// interface stateface {
//   name: string,
//   age: number
// }

export default class layout extends Component<any> {

  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    // let curRouter = this.props.location;

    // @ts-ignore
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

            <Menu.Item key="/index/home" icon={<HomeOutlined />}>
              <Link to="/index/home">主页</Link>
            </Menu.Item>

            <Menu.SubMenu key="sub1" title="设置">
              <Menu.Item key="/index/user" icon={<SettingOutlined />}>
                <Link to="/index/user">用户管理</Link>
                <Link to="/index/menu">菜单管理</Link>

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
              <Route exact path="/index/home" component={home}/>
              <Route exact path="/index/user" component={user}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>番号无限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
