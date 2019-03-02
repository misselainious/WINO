var mongoose = require('mongoose');
//var DataTypes= require('DataTypes')
mongoose.connect('mongodb://localhost:27017/wineDB', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var wineSchema = new Schema({

    wine_code: {
        type: String
    },
    country: {
        type: String
    },
    region: {
        type: String
    },
    subregion: {
        type: String
    },
    producer: {
        type: String
    },
    color: {
        type: String
    },
    wine_desc: {
        type: String
    },
    abv: {
        type: String
    },
    acidity: {
        type: String
    },
    redisual_sugar: {
        type: String
    },
    dosage: {
        type: String
    },
    years_blend: {
        type: String
    },
    bottle_date: {
        type: String
    },
    disgorgement: {
        type: String
    },
    closure: {
        type: String
    },
    annual_production: {
        type: String
    },
    varieties: {
        type: String
    },
    maceration: {
        type: String
    },
    pump_punch: {
        type: String
    },
    destem: {
        type: String
    },
    f_vessel: {
        type: String
    },
    f_duration: {
        type: String
    },
    aging_method: {
        type: String
    },
    aging_duration: {
        type: String
    },
    filtered: {
        type: String
    },
    fining: {
        type: String
    },
    yeast: {
        type: String
    },
    lees: {
        type: String
    },
    malo: {
        type: String
    },
    sulfur: {
        type: String
    },
    vinyard_name: {
        type: String
    },
    soil: {
        type: String
    },
    elevation: {
        type: String
    },
    aspect: {
        type: String
    },
    vine_age: {
        type: String
    },
    vine_yields: {
        type: String
    },
    farming_practices: {
        type: String
    },
    vine_training: {
        type: String
    },
    grape_picking: {
        type: String
    },
    notes: {
        type: String
    }


});


var wine = mongoose.model('wineList', wineSchema);
wine.findOne(  (err, result) => { 
    if (err) {return err}
    console.log(result) 
})


module.exports = mongoose.model('Wine', wineSchema);