var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = Schema({
     productName: String,
     productImage: String,
     productDescription: String,
     productPrice: Number,
     productCategory: String
});

module.exports = mongoose.model('Product', productSchema);