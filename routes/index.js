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
