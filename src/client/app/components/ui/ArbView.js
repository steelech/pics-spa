import React from 'react';
import styles from '../../../styles/components/ui/arb-view.less';


class ArbView extends React.Component {
  render() {
    return (
      <div className='arb-view'>
        <div className='toggle'>
          <i className='fa fa-tree'
            onClick={() => this.props.onArbToggle()}
          />
        </div>
      </div>
    )
  }
}

export default ArbView;
