const server = require('./server');
require('dotenv').config();

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
