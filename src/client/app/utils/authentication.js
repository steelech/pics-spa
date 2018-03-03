import { createResponseObj, handleErrors, makeRequest } from "../utils/api";
import AWS from 'aws-sdk';

const Auth = {
  isAuthenticated: () => {
    return localStorage.getItem('jwt');
  },
  authenticate: (token) => {
    return new Promise((resolve, reject) => {
      create_temp_aws_creds(token.cognito_creds)
        .then((creds) => {
          localStorage.setItem('AWSCreds', JSON.stringify(creds))
          localStorage.setItem('jwt', token.token);
          resolve()
        })
    })
  },
  logout: () => {
    localStorage.clear()
  }
}

const create_temp_aws_creds = (cognitoIdCreds) => {
  return new Promise((resolve, reject) => {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
     IdentityPoolId: 'us-east-1:8757982b-2846-41e4-8a36-222a8eddb930',
     IdentityId: cognitoIdCreds.IdentityId,
     Logins: {
      'cognito-identity.amazonaws.com': cognitoIdCreds.Token
     }
   });
   AWS.config.credentials.get(() => {
     resolve({
       'accessKeyId': AWS.config.credentials.accessKeyId,
       'secretAccessKey': AWS.config.credentials.secretAccessKey,
       'sessionToken': AWS.config.credentials.sessionToken
     })
   })
  });
}

const login = (formData) => {

  return makeRequest({
    method: 'POST',
    path: '/login',
    body: {
      username: formData.username,
      password: formData.password
    },
    authenticate: false,
  })
}

const authenticate = (token) => {
  return makeRequest({
    method: 'GET',
    path: '/authenticate',
    authenticate: true,
    token
  });
}

export { authenticate, login, Auth }
