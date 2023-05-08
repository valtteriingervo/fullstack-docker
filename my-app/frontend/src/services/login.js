import axios from 'axios'
let baseUrl
// processUrl is of form "http://localhost:3003" or "http://server:3001"
// (depending on whether or not the frontend is running inside a container network or not)
const processUrl = process.env.REACT_APP_BACKEND_URL
// If processUrl is undefined, use the relative url
processUrl ? baseUrl = `${processUrl}/api/login` : baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }