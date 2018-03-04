import React from 'react';
import styles from '../../../styles/components/pics/index.less';
import AWS from 'aws-sdk';
import { uploadToS3 } from '../../utils/aws';
import Sidebar from './Sidebar';

class PicsIndex extends React.Component {
  render() {
    return (
      <div className='pics-index'>
        <div className='pics-index-header'>
          <div className='header-text'>
            Pictures
          </div>
        </div>
        <div className='pics-index-content'>
          <Sidebar />
          <div>
            <input
              type='file'
              onChange={(e) => {
                uploadToS3(e.target.files[0])
                  .then((res) => {
                  })
              }}
            />
            <div>
              Submit
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PicsIndex;
