const BASE_URL = 'http://localhost:5000';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(JSON.stringify(response));
  }
  return response;
}

const createResponseObj = (res) => {
  return new Promise((resolve, reject) => {
    res.json()
      .then((responseBody) => {
        resolve({
          body: responseBody,
          status: res.status,
          ok: res.ok
        })
      })
  })
}

const makeRequest = (options) => {
  return new Promise((resolve, reject) => {
    var params = {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      }
    }

    if (options.method == 'POST') {
      params.body = JSON.stringify(options.body);
    }

    if (options.authenticate) {
      params.headers['Authorization'] = options.token;
    }
    return fetch(`${BASE_URL}${options.path}`, params)
      .then(createResponseObj)
      .then(handleErrors)
      .catch(err => {
        reject(JSON.parse(err.message))
      })
      .then(response => {
        resolve(response)
      });
  })
}

export { handleErrors, createResponseObj, makeRequest }
