 const mongoose = require("mongoose")
  const userModel = new mongoose.Schema({
    
    medicine:String,
    expire_date:String,
    quantity:Number,
    price:Number

    

    

  })  
  const user = mongoose.model('user', userModel)
  module.exports = user;