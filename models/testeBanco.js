var Item = require('./models/items');

var item = new Item(
  {
    item: 'labrador',
    quantidade: 666
  }
);

item.save(
  function(err, filme){
    return console.log('Deu bosta: ' + err);
  }
);
