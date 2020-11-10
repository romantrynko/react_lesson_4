import { Route } from "react-router";

import './App.css';
import Posts from "./components/Posts";
import Users from './components/Users';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div>

    <div>
      <NavLink exact to='/' activeClassName='test'>Home</NavLink> <br/>
      <NavLink to='/users'>Users</NavLink> <br/>
      <NavLink to='/posts'>Posts</NavLink>
    </div>

      <div>
        <Route exact path='/' render={() => <h1>Main component</h1>} />
        <Route path='/users' component={Users} />
        <Route path='/posts' component={Posts} />
      </div>


    </div>
  );
}

export default App;
