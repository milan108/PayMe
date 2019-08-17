var express = require('express');
var router = express.Router();

const fs = require('fs');
let raw = fs.readFileSync('stripe.json');
const secret_key = Object.values(JSON.parse(raw)).join(""); // replace with your secret API key

const stripe = require('stripe')(secret_key);
router.post("/", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 50, // 50 cents
      currency: "cad",
      description: "Test charge.",
      source: req.body
    });

    res.json({status});
  } catch (error) {
    console.log(error.type);
    res.status(500).end();
  }
});

module.exports = router;
