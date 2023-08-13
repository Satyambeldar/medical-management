var express = require('express');
var router = express.Router();
const medi = require("../model/userModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SWASTIK MEDICO' });
});
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'add medicine' });
});

router.post("/add", async function(req,res,next){
  try {
    const newmedi = new medi(req.body);
    await newmedi.save();
    res.redirect("/stoke")
  } catch (error) {
    res.send(error)
  }
})







 router.get("/stoke", async function(req, res, next) {
  
  const posts = await medi.find();
  res.render("stoke", { title: "stoke", posts });

});







router.get("/delete/:id", async function (req,res,next){
  try {
    await medi.findByIdAndDelete(req.params.id);
    res.redirect("/stoke")
  } catch (error) {
    res.send(error)
  }
})







router.get("/update/:id", async function (req,res,next){
  try {
    const work = await medi.findById(req.params.id);
    res.render("update", {title:"update", post:work})
  } catch (error) {
    res.send(error)
  }
})






router.post ("/update/:id", async function (req,res,next){
  try {
    await medi.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/stoke")
  } catch (error) {
    res.send(error)
  }
})






module.exports = router;
