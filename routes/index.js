var Item = require('../models/items');

exports.index = function(req, res) {
	res.render('index');
}

exports.lista = function(req, res) {
	Item.find(
		{},
		function(err, items){
			if(err) return console.log('Erro: ' + err);
			res.json({lista: items})
		}
	);
}
exports.add = function(req, res) {
	var item = new Item(req.body);
	item.save(
		function(err, item){
			if(err) return console.log('Erro ao salvar');
			res.send(item);
		}
	);
}
exports.update = function(req, res) {
	var id = req.body._id;
	delete req.body._id;
	Item.findByIdAndUpdate(
		id,
		req.body,
		function(err, item){
			if(err) return console.log('Erro ao fazer update: ' + err);
			res.send(item);
		}
	);
}
