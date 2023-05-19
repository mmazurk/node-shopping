const express = require('express');
const router = new express.Router();
const ExpressError = require("./expressError")
const items = require("./fakeDatabase")

items.push('{“name”: “popsicle”, “price”: 1.45}', '{“name”:”cheerios”, “price”: 3.40}')
// console.log(items);

router.get("/", function (req, res) {
  return res.json({ items });
})

module.exports = router;