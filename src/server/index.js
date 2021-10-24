const path = require('path')
require('dotenv').config() // for environment variables
const cors = require('cors') //cors to avoid cors-origin issue
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default

const PORT = 8081
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'))
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// app.get('/', function (req, res) {
//     // res.sendFile('dist/index.html')
//     res.sendFile(path.resolve('src/client/views/index.html'))
// })

const {MEAN_CLOUD_API_KEY, BASE_API_URL} = process.env
const apiPost = async (req, res) => {
  const { body: { url } } = req;
  const apiUrl = `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${url}&lang=en`
  const response = await axios.post(apiUrl);
  const result = response.data;
  res.send(result);
}
app.post('/apiPost', apiPost)

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// export app to use it in the unit testing
module.exports = {app}
