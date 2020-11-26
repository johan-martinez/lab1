const express = require('express')
const cors = require('cors')
const fs = require('fs')
var exec = require('child_process').exec;
const shell = require('shelljs');

var app = express();
var port = process.env.PORT || 3000;
var serversUrls = ["hola", "mundo"];
var pathsFiles = ['Modifieds.txt', 'LastUpdate.txt'];


app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    // read file and send response


    /*fs.readFile(pathsFiles[1], (err, data) => {
        res.send(err ? 'error' : data.toString());
    });*/
});

app.post('/', async (req, res) => {
    // reiniciar ese servidor
});


/*child = exec('sh bash.sh http://localhost:8000/ http://localhost:8001/',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
    });*/
async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}


// ping to servers and write files
async function requestServers() {
    while (true) {
        var result = '';
        /*let { stdout } = await sh('sh b.sh');
        console.log(stdout);
        for (let line of stdout.split('\n')) {
            console.log(line);
        }*/

        shell.exec('sh b.sh > out.txt');
/*
        fs.appendFile(pathsFiles[0], result, (err) => {
            if (err) console.log('error write file');
        });
        fs.writeFile(pathsFiles[1], result, (err) => {
            if (err) console.log('error write file');
        });*/
        await sleep(2000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.listen(port, () => {
    console.log(`middleware running on port ${port}`);
    requestServers();
});