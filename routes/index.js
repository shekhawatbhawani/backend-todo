var express = require('express');
var router = express.Router();

let inputModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/create", async(req,res)=>{
   await inputModel.create({
    input:req.body.todos,
  })
   res.send('Created successful')
})


router.get("/showdata", async (req, res) => {
  let data = await inputModel.find();
  res.send(data)
});
router.get("/getdata", async (req, res) => {
  res.render('showdata')
});


module.exports = router;
