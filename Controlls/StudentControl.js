var newList = require("../Module/List")
var express = require("express");

var router = express.Router();
router.get("/stu", (req, res) => {
  newList.find((err, responce) => {
    if (err)
      res.send("something went wrong");
    else
      res.send(responce);
  })
})

router.post("/list", (req, res) => {

  var newStudent = new newList({

    name: req.body.name,
    email: req.body.email,
    dept: req.body.dept,
    number: req.body.number,
    address: req.body.address
  })
  newStudent.save((err, responce) => {

    if (err)
      res.send("error occured");
    else
      res.send({ responce, status: 200, isSuccessful: true });
  })
})
module.exports = router;