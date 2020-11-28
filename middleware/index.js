const express = require('express')
const cors = require('cors')
const fs = require('fs')
const exec = require('child_process').exec;

var app = express();
var port = process.env.PORT || 3000;


const pathFile = 'logs/latest.log';

var serversUrls = ["hola", "mundo"];


app.use(cors());
app.use(express.json());

// read file and send response
app.get('/', async (req, res) => {
    fs.readFile(pathFile, (err, data) => {
        if (!err)
        res.send(data.toString());
    });
});

app.post('/', async (req, res) => {
    var id = req.body.id;
    // reiniciar ese servidor

});

function requestServers() {
    exec('sh request_servers.sh localhost:8000/ localhost:9323/');
}

app.listen(port, () => {
    console.log(`middleware running on port ${port}`);
    requestServers();
});