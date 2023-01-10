import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'http://localhost:3001',
})

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'
const storagedData = JSON.parse(localStorage.getItem('@waiterapp:user')!)

if (storagedData !== undefined) {
  const { accessToken } = storagedData
  axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}
export default baseUrl
