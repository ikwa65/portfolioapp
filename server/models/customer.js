var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerSchema = Schema({
    firstName: String,
    lastName: String,
    phone: String,
    address: {
        street:  String,
        city: String,
        county: String,
        postal: String
    }
});
module.exports = mongoose.model('Customer', customerSchema);
