var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = Schema({
     categoryName: String,
     categoryImage: String,
     categoryDescription: String,
    
});

module.export = mongoose.model('Category', categorySchema);