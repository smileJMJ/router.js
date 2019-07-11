(function(){
	const express = require('express');
	const app = express();

	var router = express.Router();

	router.get("/", function(req, res, next) {
		console.log(req.url);
		res.sendFile(__dirname + '/index.html');
	});

	// setting middleware
	app.use('/resources', express.static(__dirname + '/resources'));

	app.use("/*", router);

	app.listen(7777);
})();