const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET_KEY = '123456789';
const expiresIn = '1h';

const userdb = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/db.json'), 'UTF-8')
);

function createToken(payload) {
  const { password: _password, ...userWithoutPassword } = payload;
  return jwt.sign(userWithoutPassword, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return userdb.users.find(
    (user) => user.email === email && user.password === password
  );
}

module.exports = {
  createToken,
  verifyToken,
  isAuthenticated,
};
