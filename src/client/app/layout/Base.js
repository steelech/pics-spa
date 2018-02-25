import React from 'react';
import NavBar from '../components/ui/NavBar';
import ArbView from '../components/ui/ArbView';

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
           : <NavBar
             onLogOut={() => this.logOut()}
             onArbToggle={() => this.arbToggle()}
             />
        }
      </div>
    )
  }
}

export default Base;
