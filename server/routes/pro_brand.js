module.exports = function(app) {

	var proBrand = require('../controllers/pro_brand')
	
	app.get('/api/product/brands/init', proBrand.init);
	app.get('/api/product/brands', proBrand.findAll);
	app.get('/api/product/categories', proBrand.findAllCategories);
	app.post('/api/product/brand', proBrand.addBrand);
}