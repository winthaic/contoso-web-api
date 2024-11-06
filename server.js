'use strict'

const express = require('express');
const PORT = 8000;
const HOST = '0.0.0.0';
const app = express();

app.get('/',(req,res) => {
    res.send('Hello World - 1.1.3 testtessst');
});

app.listen(PORT,HOST,() => {
    console.log(`APP Running on http://${HOST}:${PORT}`);
});