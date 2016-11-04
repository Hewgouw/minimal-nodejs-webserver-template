function request(req, res) {
	
	var urlParts = req.originalUrl.replace("/api/", "").split("/");
    var sectionName = urlParts[0];
    var actionName = urlParts[1];
    
    var section = api[sectionName];
    if(section) {
    
		var action = section[actionName];
        if(action) {
        
			return action(req, res);
        }
    }
    
    return api.statusCodes.error404(req, res);
}

var api = {
	statusCodes: {},
    myModule: {}
};

/* Status codes */

api.statusCodes.error400 = function (req, res) {
    res.status(400)
       .send('Bad request');
};
api.statusCodes.error404 = function (req, res) {
    res.status(404)
       .send('Not found');
};

/* myModule */

api.myModule.getTodaysDate = function (req, res) {
    var date = new Date();

    res.status(200)
       .send("Todays date: " + date);
};

api.myModule.postMeSomething = function (req, res) {
    var data = req.body;
    
    res.status(200)
       .send("You sent me: " +              
             JSON.stringify(data));
}

module.exports = {
    request: request
};