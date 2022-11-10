const db = require('../config/connection');
const {} = require('../models');

//once models are done insert routes for .json when made

//
db.once('open', async () => {
    //clean database
    await({});

    //bulk create each model
    
    console.log('test')
    process.exit(0);
});