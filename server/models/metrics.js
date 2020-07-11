const mongoose = require('mongoose'), Schema = mongoose.Schema;

const MetricsSchema = mongoose.Schema({
  fastenerproducts:{type: Schema.Types.ObjectId, ref: 'FastenersProducts'},
  length:String,
  size:String,
  pro_references:String,
  shipping:String,
  is_stack_available:String,
  publish:String,
  quantity:String,
  price:String,
  A:String,
  B:String,
  C:String,
  D:String,
  F:String,
  G:String,
  H:String,
  I:String,
  J:String,
  K:String,
  L:String,
  M:String
});

module.exports = mongoose.model('Metrics', MetricsSchema);