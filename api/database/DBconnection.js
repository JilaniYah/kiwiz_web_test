const mongoose = require('mongoose');

class DBconnection{

    static connection;

    static async connect(url){

        try{
            await mongoose.connect(url,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })

            DBconnection.connection = mongoose.connection;
            console.log('Connecte a MongoDB avec succes');
        }
        catch(error){
            throw new Error('Erreur de connexion MongoDB'+ error);
        }
    }

    static getConnection(){
        return DBconnection.connection;
    }
}

module.exports = DBconnection;