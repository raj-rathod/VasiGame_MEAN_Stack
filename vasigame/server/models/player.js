const mongoose = require('mongoose');

// Create a schema..
 const Schema = mongoose.Schema;

 const PlayerSchema = new Schema({
     name: {
         type : String,
         required : true
     },
     city: {
         type : String,
         required : true
     },
     country:{
         type : String,
         required : true
     },
     Rank: {
         type : String,
         required : true
     }
 });

// model contain three parameter.... first one is Model name
// Second one is Schema name
// collection name...
 module.exports = mongoose.model('Player', PlayerSchema,'Players');

