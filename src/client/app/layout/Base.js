import React from 'react';
import NavBar from '../components/ui/NavBar';
import ArbView from '../components/ui/ArbView';
import PicsIndex from '../components/pics/index';
import MusicIndex from '../components/music/index';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showArb: false,
    }
  }
  logOut() {
    this.props.onLogout();
  }
  arbToggle() {
    this.setState({
      showArb: !this.state.showArb,
    })
  }
  render() {
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
              <Route
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
              <Route
                path="/pics"
                component={PicsIndex}
              />
              <Route
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
