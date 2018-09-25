var mongoose = require('mongoose')

var googleClass = new mongoose.Schema({
    marcket: Number,
    fruits: Array
  }); 

var googleModel = mongoose.model('googleModel', googleClass, 'fruit');

module.exports = googleModel