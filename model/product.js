var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  prod_name: {
    type: String,
    required: [true, 'product name is requires!!!!']
  },
  prod_desc: String,
  prod_price: Number,
  updated_at: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Product', ProductSchema);