import axios from 'axios'
const baseUrl = 'http://localhost:8787/confirmation/all'

const data = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

export default { data }