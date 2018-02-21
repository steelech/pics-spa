import { createResponseObj, handleErrors, makeRequest } from "../utils/api";

const Auth = {
  isAuthenticated: () => {
    return localStorage.getItem('jwt');
  },
  authenticate: (token) => {
    localStorage.setItem('jwt', token);
  },
  logout: () => {
    localStorage.removeItem('jwt');
  }
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
