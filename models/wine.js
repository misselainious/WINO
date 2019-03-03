var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wineSchema = new Schema({

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
        varieties: String,
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

module.exports = mongoose.model('Wine', wineSchema);