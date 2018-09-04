// import jwt from 'jsonwebtoken';
import User from '../models/user.model';

// export function verifyJWTToken(token) {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//       if (err || !decodedToken) {
//         return reject(err);
//       }

//       resolve(decodedToken);
//     });
//   });
// }

// export function createJWToken(details) {
//   if (typeof details !== 'object') {
//     details = {};
//   }

//   if (!details.maxAge || typeof details.maxAge !== 'number') {
//     details.maxAge = 3600;
//   }

//   details.sessionData = _.reduce(
//     details.sessionData || {},
//     (memo, val, key) => {
//       if (typeof val !== 'function' && key !== 'password') {
//         memo[key] = val;
//       }
//       return memo;
//     },
//     {},
//   );

//   const token = jwt.sign(
//     {
//       data: details.sessionData,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: details.maxAge,
//       algorithm: 'HS256',
//     },
//   );

//   return token;
// }

// export default {
//   verifyJWTToken,
//   createJWToken,
// };

User.setPassword = (req) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(req.password, this.salt, 10000, 512, 'sha512').toString('hex');
};

User.validPassword = (req, res) => {
  const hash = crypto.pbkdf2Sync(req.password, this.salt, 10000, 512, 'sha512').toString('hex');
  res(this.hash === hash);
};

// User.methods.generateJWT = (req, res) => {
//   const today = new Date();
//   const exp = new Date(today);
//   exp.setDate(today.getDate() + 60);
//   return jwt.sign(
//     {
//       id: this._id,
//       username: this.username,
//       exp: parseInt(exp.getTime() / 1000),
//     },
//     secret,
//   );
// };

User.methods.toAuthJSON = () => ({
  username: this.username,
  email: this.email,
  bio: this.bio,
  image: this.image,
  token: this.generateJWT(),
});
