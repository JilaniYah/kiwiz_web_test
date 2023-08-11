const express       = require('express');
const DBConnection  = require('./database/DBconnection')
const router        = require('./routes/router.js');

const app = express();
app.use('/',router);

let mongoDB = 'mongodb://127.0.0.1/kiwizDatabase';

(async()=>{
    await DBConnection.connect(mongoDB);
})();

const port = 5000;
app.listen(port,()=>{
    console.log(`Le serveur ecoute sur le port ${port}`);
});

module.exports =app;