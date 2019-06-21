import axios from 'axios'

var apiServer = process.env.API_SERVER || `http://localhost`
var port = process.env.API_PORT || '1337'

const client = axios.create({
  baseURL: apiServer + ':' + port,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

export default client