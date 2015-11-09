var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items');

var itemSchema =  new mongoose.Schema(
  {
    item: {
      type: String
    },
    quantidade: {
      type: Number
    }
  }
);

var Item = mongoose.model( 'Item', itemSchema );
module.exports = Item;
