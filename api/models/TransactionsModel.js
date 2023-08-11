const dbClient = require('../database/DBconnection');

class TransactionsModel{

    async insertTransactions(data){

        const conn = dbClient.getConnection();
        const collectionName = 'transactions';

        try{
            return await conn.collection(collectionName).insertMany(data);
        }
        catch(error){
            console.log('Il y a une erreur pour ajouter les transactions:' + error);
        }
    }
}

module.exports = new TransactionsModel();