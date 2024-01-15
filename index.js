const http = require("https");
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const { exec } = require("child_process");

exec("", (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(`Output: ${stdout}`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
