import axios from 'axios'
const api = axios.create({
  baseURL: 'http://192.168.35.251:3333'
})

export default api