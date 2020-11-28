const express = require('express')
const cors = require('cors')
const fs = require('fs')
const exec = require('child_process').exec;

var app = express();
var port = process.env.PORT || 3000;


const pathFile = 'logs/latest.log';

var serversUrls = [{ ip: "192.168.1.78", port: 8000 }, { ip: "localhost", port: 8001 }];
var restart_server_file = 'restart_server.sh';

app.use(cors());
app.use(express.json());

// read file and send response
app.get('/', async (req, res) => {
    fs.readFile(pathFile, (err, data) => {
        if (err) res.sendStatus(400);
        else res.send(data.toString());
    });
});

app.post('/', async (req, res) => {
    var id = req.body.id;
    var ip = serversUrls[id].ip;
    console.log(`ssh root@${ip} 'bash -s' < ${restart_server_file}`);
    exec(`ssh root@${ip} 'bash -s' < ${restart_server_file}`, (error, stdout, stderr) => {
        if (error) res.json({ request: "error" });
        else res.json({ request: "success" });
    });
    // ssh root@192.168.1.78 'bash -s' < test.sh
});

function requestServers() {
    exec('sh request_servers.sh http://localhost:8001/');
}

app.listen(port, () => {
    console.log(`middleware running on port ${port}`);
    requestServers();
});