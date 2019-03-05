const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema({

        code: String,
        country: String,
        region: String,
        subregion: String,
        producer: String,
        color: String,
        wine: String,
        alcohol_by_volume: String,
        acidity: String,
        redisual_sugar: String,
        dosage: String,
        years_in_blend: String,
        bottling_date: String,
        disgorgement_date: String,
        closure: String,
        annual_cases_produced: Number,
        constieties: String,
        maceration_notes: String,
        pumpover: String,
        destemming: String,
        fermentation_vessel: String,
        fermentation_duration: String,
        aging_method: String,
        aging_duration: String,
        filtered: String,
        fining_agents: String,
        yeast: String,
        lees_contact: String,
        malolactic: String,
        added_sulfur: String,
        vinyard_name: String,
        soil_types: String,
        elevation: String,
        vine_aspect: String,
        vine_age: Number,
        vine_yields: Number,
        farming_practices: String,
        vine_training_notes: String,
        grape_picking: String,
        notes: String
    });


//     });

// module.exports = mongoose.model('Wine', wineSchema);


// Require mongoose
// var mongoose = require("mongoose");

// // Get a reference to the mongoose Schema constructor
// var Schema = mongoose.Schema;

// // Using the Schema constructor, create a new ExampleSchema object
// // This is similar to a Sequelize model
// var WineSchema = new Schema({
//   // `string` must be of type String. We "trim" it to remove any trailing white space
//   // `string` is a required field, and a custom error message is thrown if it is not supplied
//   code: {
//     type: String
//   },
//   producer: {
//     type: String
//   },
//   notes: {
//       type: String
//   }
// });

// // This creates our model from the above schema, using mongoose's model method
// var Wine = mongoose.model("Wine", WineSchema);

// // Export the Example model
// module.exports = Wine;
// module.exports = mongoose.model('Wine', wineSchema);


const Wine = mongoose.model('wineList', wineSchema, "wineList");

// Wine.findOne((err, result) => {
//     if (err) { return err }
//     console.log("wine find results", result)
// })

module.exports = Wine


