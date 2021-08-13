import Base from './layout/index'
import Login from './pages/login/login'
import './common/common.scss'
const { BrowserRouter, Switch, Route } = require('react-router-dom')
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Base} />
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
