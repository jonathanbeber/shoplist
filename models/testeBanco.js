var Item = require('./models/items');

var item = new Item(
  {
    item: 'labrador',
    quantidade: 666
  }
);

item.save(
  function(err, item){
    if(err) return console.log('Deu bosta: ' + err);
    return console.log('Incluso: ' + item );
  }
);
