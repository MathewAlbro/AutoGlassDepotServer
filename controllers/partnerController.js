const router = require("express").Router();
const partner = require("../db").import("../models/partnerModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const validateSession = require("../middleware/validate-session");

router.post("/", function (req, res) {
  partner
    .create({
      insuranceCompany: req.body.insuranceCompany,
      agency: req.body.agency,
      policyHolder: req.body.policyHolder,
      policyNumber: req.body.policyNumber,
      dateOfLoss: req.body.dateOfLoss,
      policyHolderPhone: req.body.policyHolderPhone,
      policyHolderZipCode: req.body.policyHolderZipCode,
      deductible: req.body.deductible,
      yearMakeModel: req.body.yearMakeModel,
      vinNumber: req.body.vinNumber,
    })
    // .then(function createSuccess(customer) {
    //   let token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, {
    //     expiresIn: 60 * 60 * 24,
    //   });

    .then(function partnerSuccess(partner) {
      res.json({
        partner: partner,
        message: "Partner Form Accepted",
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
