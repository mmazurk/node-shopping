const express = require("express");
const router = new express.Router();
const ExpressError = require("./expressError");
const items = require("./fakeDatabase");

items.push({ name: "popsicle", price: 1.45 }, { name: "cheerios", price: 3.4 });
// console.log(items);

router.get("/", function (req, res) {
  return res.json({ items });
});

router.post("/", function (req, res) {
  let item = req.body;
  console.log(item);
  items.push(item);
  return res.json({ added: item });
});

router.get("/:name", function (req, res) {
  let itemName = req.params.name;
  let foundItem = items.find((item) => {
    return item.name === itemName;
  });
  if (foundItem) {
    return res.json(foundItem);
  } else {
    return res.json({ Message: "Item not found" });
  }
});

router.patch("/:name", function (req,res) {
  let newItem = req.body;
  let itemName = req.params.name;
  let index = items.findIndex(item => item.name === itemName)
  if (index !== -1) {
    items[index].name = newItem.name
    items[index].price = newItem.price
    return res.json({message: "Item updated successfully"})
  } else {
    return res.json({ message: "Item not found" });
  }
})

router.delete("/:name", function(req,res) {
  let itemName = req.params.name;
  let index = items.findIndex(item => item.name === itemName)
  if (index !== -1) {
    items.splice(index, 1)
    return res.json({message: "Item deleted successfully"})
  } else {
    return res.json({ message: "Item not found" });
  }
})


module.exports = router;
