const router = require("express").Router();
const customer = require("../db").import("../models/customerModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const validateSession = require("../middleware/validate-session")

router.post("/customer", function (req, res) {
  customer.create({
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    carMake: req.body.carMake,
    carModel: req.body.carModel,
    year: req.body.year,
    
    insurance: req.body.insurance,
    comments: req.body.comments,
  })
  // .then(function createSuccess(customer) {
  //   let token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, {
  //     expiresIn: 60 * 60 * 24,
  //   });

  

  .then(function customerSuccess(customer) {
    res.json({
      customer: customer,
      message: "Customer Accepted",
    });
  })
  .catch((err) => res.status(500).json({ error: err }));
});

//   res.json({
//     customer: customer,
//     message: "Customer created",
//     // sessionToken: token,
//   });
// });
// .catch((err) => res.status(500).json({ error: err }));
// });

module.exports = router;
