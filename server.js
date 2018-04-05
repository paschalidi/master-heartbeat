const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || dev ? 3000 : 3001;
const app = next({ dev });
const handle = app.getRequestHandler();
const corsOptions = {
  origin(origin, callback) {
    callback(null, true);
  },
  credentials: true
};
app.prepare()
.then(() => {
  const server = express();
  server.use(cors(corsOptions));
  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  server.get('*', (req, res) => handle(req, res));
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});