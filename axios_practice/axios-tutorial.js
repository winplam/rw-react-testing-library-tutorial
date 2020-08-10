/* ZetCode Axios Tutorial
   http://zetcode.com/javascript/axios/
*/
const axios = require('axios')

// Axios GET request with callbacks
axios.get('http://webcode.me').then(resp => {
  console.log(resp.data)
})

// Axios GET request with async/await
async function makeGetRequest () {
  let res = await axios.get('http://webcode.me')
  let data = res.data
  console.log(data)
}
makeGetRequest()

// Axios HEAD request
async function makeHeadRequest () {
  let res = await axios.head('http://webcode.me')
  console.log(`Status: ${res.status}`)
  console.log(`Server: ${res.headers.server}`)
  console.log(`Date: ${res.headers.date}`)
}
makeHeadRequest()
// Axios basic API
// The get(), post(), or delete() methods are convenience methods
// for the basic axios API: axios(config) and axios(url, config).
async function makeRequest () {
  const config = {
    method: 'get',
    url: 'http://webcode.me'
  }
  let res = await axios(config)
  console.log(res.status)
}
makeRequest()
// Axios custom header
async function makeRequest () {
  const config = {
    method: 'get',
    url: 'http://webcode.me',
    headers: { 'User-Agent': 'Console app' }
  }
  let res = await axios(config)
  console.log(res.request._header)
}
makeRequest()
async function getNumberOfFollowers () {
  let res = await axios.get('https://api.github.com/users/janbodnar')
  let nOfFollowers = res.data.followers
  let location = res.data.location
  // console.log(res.data)
  console.log(`# of followers: ${nOfFollowers}`)
  console.log(`Location: ${location}`)
}
getNumberOfFollowers()
// Axios POST request
async function makePostRequest () {
  let res = await axios.post('https://jsonplaceholder.typicode.com/posts')
  // console.log(res)
  console.log(`Status code: ${res.status}`)
  console.log(`Status text: ${res.statusText}`)
  console.log(`Request method: ${res.request.method}`)
  console.log(`Path: ${res.request.path}`)
  console.log(`Date: ${res.headers.date}`)
  console.log(`Data: ${JSON.stringify(res.data)}`)
  console.dir(res.data)
  console.table(res.data)
  Object.entries(res.data).forEach(keyValuePair => {console.log('  ', ...keyValuePair)})
}
makePostRequest()
// Axios download image
const fs = require('fs')
var config = {
  responseType: 'stream'
}
let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg'
async function getImage () {
  let resp = await axios.get(url, config)
  resp.data.pipe(fs.createWriteStream('image.jpg'))
}
getImage()
// Axios multiple requests
async function makeRequests () {
  let [u1, u2] = await Promise.all([
    axios.get('https://api.github.com/users/janbodnar'),
    axios.get('https://api.github.com/users/symfony')
  ])
  console.log(`Jan Bodnar: ${u1.data.created_at}`)
  console.log(`Symfony: ${u2.data.created_at}`)
}
makeRequests()
// Using Axios with JSON Server
// $ json-server --watch users.json
// curl localhost:3000/users/2/

// Posting a user (creates new user #6 and saves it to users.json file)
async function makePostRequest () {
  params = {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
  }
  let res = await axios.post('http://localhost:3000/users/', params)
  console.log(res.data)
}
makePostRequest()
// Getting users
async function makeGetRequest () {
  let res = await axios.get('http://localhost:3000/users/')
  let data = res.data
  console.log(data)
}
makeGetRequest()

// Deleting a user
async function makePostRequest () {
  let res = await axios.delete('http://localhost:3000/users/6/')
  console.log(res.status)
}
makePostRequest()
