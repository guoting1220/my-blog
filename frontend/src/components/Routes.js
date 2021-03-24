import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Post from './Post';
import NewPost from './NewPost';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/new">
        <NewPost />
      </Route>

      <Route exact path="/:postId">
        <Post />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;