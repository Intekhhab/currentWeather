
module.exports = function(app) {	
	// Render index.html for all routes
	app.all('*', function(req, res) {
		res.sendFile('index.html', { root: __dirname + '/../views' });
	});
};