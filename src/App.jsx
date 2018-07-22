import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TimeNow from './TimeNow';
import TodoList from './TodoList';
import PostList from './PostList';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to React
        </h2>
      </div>
      <p className="App-intro">
        To get started, edit
        <code>
          src/App.js
        </code>
        and save to reload.
      </p>
      <Link to="/todolist"> 
        Todo List,
      </Link>
      <Link to="/postlist"> 
        Post List,
      </Link>
      <Link to="/timenow"> 
        Time Now
      </Link>
      <Switch>
        <Route exact path="/timenow" component={TimeNow} />
      </Switch>
      <Switch>
        <Route exact path="/todolist" component={TodoList} />
      </Switch>
      <Switch>
        <Route exact path="/postlist" component={PostList} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
