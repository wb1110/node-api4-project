const express = require('express');

const server = express();
server.use(express.json());

server.get('/api/users', (req, res) => {
  res.send('hello users');
});

server.get('/api/register', (req, res) => {
  res.send('hello register');
});

server.get('/api/login', (req, res) => {
  res.send('hello login');
});

module.exports = server;
