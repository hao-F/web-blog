import React from 'react'
// import {BrowserRouter, Route} from 'react-router-dom'
import Base from './layout/index'
import Login from './pages/login/login'
import './common/common.scss'
const { BrowserRouter, Route } = require('react-router-dom')

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Route to="/">
            <Route path="/index" component={Base} />
          </Route>
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
  );
}

export default App;
