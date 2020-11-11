import { Route, Switch } from "react-router";

import './App.css';
import Posts from "./components/Posts";
import Users from './components/Users';
import { NavLink } from 'react-router-dom';
import User from "./components/User";
import Comments from "./components/Comments";
import Comment from "./components/Comment";
import AllPosts from "./components/AllPosts";

function App() {
  
  return (
    <div>

    <div class="button">
      <NavLink  to='/' >Home</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/comments'>Comments</NavLink>
      </div>

      <div>
        <Switch>
          <Route path='/users/:id/posts' component={Posts} />
          <Route path='/posts/:id/comments' component={Comments} />
          <Route path='/users/:id' component={User} />
          <Route path='/comments/:id' component={Comment} />

          <Route path='/users' component={Users} />
          <Route path='/posts' component={AllPosts} />
          <Route path='/comments' component={Comments} />
          
          <Route path='/' render={() => <h1>Homepage</h1>} />
        </Switch>
      </div>


    </div>
  );
}

export default App;
