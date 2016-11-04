function get(req, res) {
	
	var urlParts = req.originalUrl.replace("/api/", "").split("/");
    var sectionName = urlParts[0];
    var actionName = urlParts[1];
    
    var section = api[sectionName];
    if(section) {
    
		var action = section[actionName];
        if(action) {
        
			return action(req, res, urlParts[2]);
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

/* Projects */

api.myModule.getTodaysDate = function (req, res) {
    var date = new Date();

    res.send("Todays date: ", date);
};



module.exports = {
    get: get
};