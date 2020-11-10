import { Route, Switch } from "react-router";

import './App.css';
import Posts from "./components/Posts";
import Users from './components/Users';
import { NavLink } from 'react-router-dom';
import User from "./components/User";



function App() {
  
  return (
    <div>

      <div>
        <NavLink to='/' activeClassName='test'>Home</NavLink> <br />
        <NavLink to='/users'>Users</NavLink> <br />
        <NavLink to={
          { 
            pathname: '/posts',
            search: '?a=1&b=2',
            hash: 'xxx'
          }
        }>Posts</NavLink>
      </div>

      <div>
        <Switch>
          <Route path='/users/:id' component={User} />
          <Route path='/users' component={Users} />
          <Route path='/posts' component={Posts} />
          <Route path='/' render={() => <h1>Main component</h1>} />
        </Switch>
      </div>


    </div>
  );
}

export default App;
