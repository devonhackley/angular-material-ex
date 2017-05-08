'use strict';

const express = require('express');
const app = express();
const pathe = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000);
