import React from 'react';
import styles from '../../../styles/components/ui/nav-bar.less';
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";


class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='pics-button'>
          <NavLink
            className="pics-link"
            to="/pics"
          >
            <i className='fa fa-camera-retro'
              onClick={this.props.onPicsClick}
            />
          </NavLink>
        </div>
        <div className='music-button'>
          <NavLink
            className='music-link'
            to="/music"
          >
            <i className='fa fa-music'
              onClick={this.props.onMusicClick}
            />
          </NavLink>
        </div>
        <div className='toggle-button'>
          <i className='fa fa-tree'
            onClick={this.props.onArbToggle}
          />
        </div>
        <div className='sign-out-button'>
          <i className='fa fa-sign-out'
            onClick={this.props.onLogOut}
          />
        </div>
      </div>
    )
  }
}

export default NavBar;
