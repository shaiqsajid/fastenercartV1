const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CategoriesSchema = mongoose.Schema({
    id: String,
    parent_id:String,
    name: String,
    image: String,
    status: String
});

module.exports = mongoose.model('Categories', CategoriesSchema);