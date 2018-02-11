import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

const Login = () => {
  return (
    <div>
      Login
    </div>
  )
}

class App extends React.Component {
  render () {
    console.log('rendering stuff')
    return (
      <div>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}


render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
