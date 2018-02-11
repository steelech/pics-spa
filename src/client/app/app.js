import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}


render(
  <App>
    <div>Hi</div>
  </App>,
  document.getElementById('app')
);
