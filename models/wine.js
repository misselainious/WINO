// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var wineSchema = new Schema({

//         wine_code: {
//             type: String
//         },
//         country: {
//             type: String
//         },
//         region: {
//             type: DataTypes.STRING
//         },
//         subregion: {
//             type: DataTypes.STRING
//         },
//         producer: {
//             type: DataTypes.STRING
//         },
//         color: {
//             type: DataTypes.STRING
//         },
//         wine_desc: {
//             type: DataTypes.STRING
//         },
//         abv: {
//             type: DataTypes.STRING
//         },
//         acidity: {
//             type: DataTypes.STRING
//         },
//         redisual_sugar: {
//             type: DataTypes.STRING
//         },
//         dosage: {
//             type: DataTypes.STRING
//         },
//         years_blend: {
//             type: DataTypes.STRING
//         },
//         bottle_date: {
//             type: DataTypes.STRING
//         },
//         disgorgement: {
//             type: DataTypes.STRING
//         },
//         closure: {
//             type: DataTypes.STRING
//         },
//         annual_production: {
//             type: DataTypes.STRING
//         },
//         varieties: {
//             type: DataTypes.STRING
//         },
//         maceration: {
//             type: DataTypes.STRING
//         },
//         pump_punch: {
//             type: DataTypes.STRING
//         },
//         destem: {
//             type: DataTypes.STRING
//         },
//         f_vessel: {
//             type: DataTypes.STRING
//         },
//         f_duration: {
//             type: DataTypes.STRING
//         },
//         aging_method: {
//             type: DataTypes.STRING
//         },
//         aging_duration: {
//             type: DataTypes.STRING
//         },
//         filtered: {
//             type: DataTypes.STRING
//         },
//         fining: {
//             type: DataTypes.STRING
//         },
//         yeast: {
//             type: DataTypes.STRING
//         },
//         lees: {
//             type: DataTypes.STRING
//         },
//         malo: {
//             type: DataTypes.STRING
//         },
//         sulfur: {
//             type: DataTypes.STRING
//         },
//         vinyard_name: {
//             type: DataTypes.STRING
//         },
//         soil: {
//             type: DataTypes.STRING
//         },
//         elevation: {
//             type: DataTypes.STRING
//         },
//         aspect: {
//             type: DataTypes.STRING
//         },
//         vine_age: {
//             type: DataTypes.STRING
//         },
//         vine_yields: {
//             type: DataTypes.STRING
//         },
//         farming_practices: {
//             type: DataTypes.STRING
//         },
//         vine_training: {
//             type: DataTypes.STRING
//         },
//         grape_picking: {
//             type: DataTypes.STRING
//         },
//         notes: {
//             type: String
//         }


//     });

// module.exports = mongoose.model('Wine', wineSchema);


// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var WineSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  code: {
    type: String
  },
  producer: {
    type: String
  },
  notes: {
      type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Wine = mongoose.model("Wine", WineSchema);

// Export the Example model
module.exports = Wine;