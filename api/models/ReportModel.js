const dbClient = require('../database/DBconnection');

class ReportModel{

    async getReport(){

        const conn = dbClient.getConnection();
        const collectionName = 'transactions';

        try{
            return await conn.collection(collectionName).find().toArray();
        }
        catch(error){
            console.log('Il y a une erreur pour recuperer le rapport:' + error);
        }
    }
}

module.exports = new ReportModel();