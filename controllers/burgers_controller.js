var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelizeConnection = models.sequelize;

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	return sequelizeConnection.sync()

	.then(function(){
		return models.Burger.findAll()
	})

	.then(function(data){
		var hbsObject = { burgers:data };
		return res.render('index', hbsObject);
	});
});

router.post('/burgers/insert', function (req, res) {
	return sequelizeConnection.sync()

	.then(function(){
		models.Burger.create({ burger_name: req.body.name })
		return res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	return sequelizeConnection.sync()

	.then(function(){
		return models.Burger.update(
		{
			devoured: req.body.devoured
		}, 
		{
			where: {
				id: req.params.id
			}
		})
	})

	.then(function(){
		return res.redirect('/burgers');
	});
});

module.exports = router;