import axios from 'axios';

// Default API will be your root
const TIMEOUT = 20000;
const HEADERS = {
    "Api-Version": 'v1',
    responseType: 'application/json',
    'Content-Type': 'application/json',
    Accept: 'application/json',
};
const Authorization = () => localStorage.getItem('token');

class ApiService {
  constructor({ baseURL, timeout = TIMEOUT, headers = HEADERS, auth }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });
    client.interceptors.request.use(
      function (config) {
        if (Authorization()) {
          config.headers.Authorization = "Bearer " + Authorization();
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    )
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => (response.data));
  }

  post(path, payload) {
    return this.client.post(path, (JSON.stringify(payload))).then(response => (response.data));
  }

  imgPost(path, payload) {
    return this.client.post(path, payload).then(response => (response.data));
  }

  put(path, payload) {
    return this.client.put(path, (JSON.stringify(payload))).then(response => (response.data));
  }

  patch(path, payload) {
    return this.client.patch(path, (JSON.stringify(payload))).then(response => (response.data));
  }

  delete(path, payload) {
    return this.client.delete(path, { data: payload }).then(response => (response.data));
  }
}

export default ApiService;
