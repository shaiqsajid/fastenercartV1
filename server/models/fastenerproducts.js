const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ProductsSchema = mongoose.Schema({
    category : { type: Schema.Types.ObjectId, ref: 'Categories' },
    name: {
        type:String,
        unique:1,
        required:true,
        maxlenth:100
    },
    description:String,
    status: String,
    pro_img:String,
    pro_img_descr:String,
    pro_img_without_descr:String,
    num_of_metrics:String,
    metrics:[],
    materials:[],
    alternate_finish:[],
    finsh_color: String,
    strock_availability:String
});

module.exports = mongoose.model('FastenersProducts', ProductsSchema);