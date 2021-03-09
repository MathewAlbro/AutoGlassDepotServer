const jwt = require("jsonwebtoken");
const Customer = require("../db").import("../models/customerModel");
require("dotenv").config();

const validateSession = (req, res, next) => {
  if (req.method == "OPTIONS") {
    next();
  } else {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(403).send({ auth: false, message: "No token." });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
        if (!err && decodeToken) {
          Customer.findOne({
            where: {
              id: decodeToken.id,
            },
          })
            .then((user) => {
              if (!user) throw err;
              req.user = user;
              return next();
            })
            .catch((err) => next(err));
        } else {
          req.errors = err;
          return res.status(500).send("Not Authorized");
        }
      });
    }
  }
};

module.exports = validateSession;
