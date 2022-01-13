const express = require('express');
const get = require('./users-helpers');

const server = express();
server.use(express.json());

server.get('/api/users', (req, res) => {
  get()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

server.post('/api/register', (req, res) => {
  res.send('hello register');
});

server.post('/api/login', (req, res) => {
  res.send('hello login');
});

module.exports = server;
