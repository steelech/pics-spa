import React from 'react';
import styles from '../../../styles/components/ui/nav-bar.less';


class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='sign-out-button'>
          <i className='fa fa-sign-out'
            onClick={this.props.onLogOut}
          />
        </div>
        <div className='toggle-button'>
          <i className='fa fa-tree'
            onClick={this.props.onArbToggle}
          />
        </div>
      </div>
    )
  }
}

export default NavBar;
