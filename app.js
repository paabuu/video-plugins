const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const proxy = require('express-http-proxy');

app.use(cors());
app.use(express.static('static'));

app.get('/proddev/*', proxy('http://demo.tremorvideo.com/'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})


app.listen(3002, function() {
    console.log('server is running on port 3002')
})
