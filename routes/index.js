exports.index = function(req, res) {
	res.render('index');
}

exports.lista = function(req, res) {
	res.json({
		lista:	[
			{
				item: 'Detergente',
				quantidade: 10
			},
			{
				item: 'Pano de louça',
				quantidade: 2
			}
		]
	});
}
