import React from 'react';
import styles from '../../../styles/components/music/index.less';


class MusicIndex extends React.Component {
  render() {
    return (
      <div className='music-index'>
        <div className='music-index-header'>
          <div className='header-text'>
            Music
          </div>
        </div>
        <div className='music-index-content'>
          Content
        </div>
      </div>
    )
  }
}

export default MusicIndex;
