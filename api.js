const request = (req, res) => {
	
    const urlParts = req.originalUrl.replace("/api/", "").split("/");
    const sectionName = urlParts[0];
    const actionName = urlParts[1];
    
    const section = api[sectionName];
    if(section) {
    
        const action = section[actionName];
        if(action) {
        
            return action(req, res);
        }
    }
    
    return api.statusCodes.error404(req, res);
}

const api = {
    statusCodes: {},
    myModule: {}
};

/* Status codes */

api.statusCodes.error400 = (req, res) => {
    res.status(400)
       .send('Bad request');
};
api.statusCodes.error404 = (req, res) => {
    res.status(404)
       .send('Not found');
};

/* myModule */

api.myModule.getTodaysDate = (req, res) => {
    const date = new Date();

    res.status(200)
       .send("Todays date: " + date);
};

api.myModule.postMeSomething = (req, res) => {
    const data = req.body;
    
    res.status(200)
       .send("You sent me: " +              
             JSON.stringify(data));
}

module.exports = {
    request
};