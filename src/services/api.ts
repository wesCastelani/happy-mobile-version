import axios from 'axios';

//192.168.0.105 ip expo
//LocalHost

const api = axios.create({
  baseURL: 'http://192.168.0.105:3333',
});

export default api;
