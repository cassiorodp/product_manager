const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const {
  createToken,
  isAuthenticated,
  verifyToken,
} = require('./jwtUtils/index.js');

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
server.use(jsonServer.defaults());
server.use(bodyParser.json());

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = 'Incorrect email or password';
    return res.status(status).json({ status, message });
  }
  const accessToken = createToken({ email, password });
  return res.status(200).json({ accessToken });
});

server.use(/^(?!.*\/auth|.*\/users).*$/, (req, res, next) => {
  if (!req.headers.authorization) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('Run Auth API Server');
});
