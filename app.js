const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const proxy = require('express-http-proxy');

app.use(cors());
app.use(express.static('static'));
app.use(express.static('static/mediaelement/dist'));

app.get('/proddev/*', proxy('http://demo.tremorvideo.com/'));

app.get('/videojs', (req, res) => {
    res.sendFile(path.resolve('videojs.html'));
});

app.get('/jwplayer', (req, res) => {
    res.sendFile(path.resolve('jwplayer.html'));
});

app.get('/mediaelement', (req, res) => {
    res.sendFile(path.resolve('mediaelement.html'));
});

app.listen(3002, function() {
    console.log('server is running on port 3002')
})
