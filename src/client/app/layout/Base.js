import React from 'react';

class Base extends React.Component {
  render() {
    return (
      <div>
        Base
        <button onClick={this.props.onLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Base;
