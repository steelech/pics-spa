import React from 'react';
import NavBar from '../components/ui/NavBar';
import ArbView from '../components/ui/ArbView';
import PicsIndex from '../components/pics/index';
import MusicIndex from '../components/music/index';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { PrivateRoute } from '../routing';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showArb: false,
    }
  }
  logOut() {
    console.log('logging out');
    this.props.onLogout();
  }
  arbToggle() {
    console.log('toggle');
    this.setState({
      showArb: !this.state.showArb,
    })
  }
  render() {
    debugger
    return (
      <div className='base'>
        {
          this.state.showArb
           ? <ArbView
             onArbToggle={() => this.arbToggle()}
            />
           :
            <div>
              <NavBar
               onLogOut={() => this.logOut()}
               onArbToggle={() => this.arbToggle()}
               />
              <PrivateRoute
                exact
                path='/'
                component={() => (
                  <Redirect
                    to={{
                      pathname: '/pics'
                    }}
                  />
                )}
              />
              <PrivateRoute
                path="/pics"
                component={PicsIndex}
              />
              <PrivateRoute
                path="/music"
                component={MusicIndex}
              />
            </div>
        }
      </div>
    )
  }
}

export default Base;
