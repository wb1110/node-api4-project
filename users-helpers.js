const db = require('./data/db');

function get() {
  return db;
}

module.exports = get;
