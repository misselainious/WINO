const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerSchema = new Schema({

    producer: String,
    date_founded: String,
    property_history: String,
    owner_history: String,
    owner_name: String,
    other_important_people: String,
    vineyard_size_ha: Number,
    total_annual_production: String,
    city_of_origin: String,
    region: String,
    subregion: String,
    country: String
});

const Producer = mongoose.model('producerList', producerSchema, 'producerList');

// Producer.findOne((err, result) => {
//     if (err) { return err }
//     console.log("producer results", result)
// })

module.exports = Producer
