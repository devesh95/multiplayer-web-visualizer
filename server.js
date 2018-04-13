const express = require('express')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()

const domain = 'http://core.multiplayar.me/'
const ids = 'ids'
const images = 'imagequery'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ids', (req, res) => {
  request(domain + ids, (e, r, b) => res.send(b))
})

app.post('/imagequery', (req, res) => {
  request.post({
    url: domain + images,
    body: req.body,
    json: true,
  }, (e, r, b) => res.send(b))
})

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.listen(3000, () => console.log('Example app listening on port 3000!'))