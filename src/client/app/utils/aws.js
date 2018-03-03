import AWS from 'aws-sdk';

const getCreds = () => {
  return new Promise((resolve, reject) => {
    // if no creds in localStorage, get creds from backend, set localStorage
    // if creds in localStorage,
    var creds;
    if (AWS.config.credentials) {
      creds = {
        accessKeyId: AWS.config.credentials.accessKeyId,
        secretAccessKey: AWS.config.credentials.secretAccessKey,
        sessionToken: AWS.config.credentials.sessionToken
      }
    } else {
      creds = {
        accessKeyId: JSON.parse(localStorage.getItem('AWSCreds')).accessKeyId,
        secretAccessKey: JSON.parse(localStorage.getItem('AWSCreds')).secretAccessKey,
        sessionToken: JSON.parse(localStorage.getItem('AWSCreds')).sessionToken
      }
    }
    resolve(creds);
    // TODO: check for expired creds, get creds from backend if expired
    if ( false /* creds are expired */ ) {
      // get new temporary creds from backend
    }
  });
}

const uploadToS3 = (file) => {
  return new Promise((resolve, reject) => {
    // check AWS.config.credentials, then get creds from localStorage
    getCreds()
      .then(creds => {
        // upload pic to s3
        var s3 = new AWS.S3({
          accessKeyId: creds.accessKeyId,
          secretAccessKey: creds.secretAccessKey,
          sessionToken: creds.sessionToken
        });
        var params = {
          Bucket: 'pics-app1',
          Key: file.name,
          ContentType: file.type,
          Body: file,
        }
        s3.upload(params, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
  });
}

export { uploadToS3 };
