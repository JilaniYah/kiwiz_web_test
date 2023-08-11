const model = require('../models/TransactionsModel');

class TransactionsController{

    async insertTransactions(req,res){

        try{
            const csv = req.file.buffer.toString();
    
            const transactions = [];

            const lines = csv.split('\n');

            lines.forEach(line => {
                
                const [date,type,amount, memo] = line.split(',').map(item=> item.trim())

                if(date && type && amount && memo){
                    transactions.push({date,type,amount:parseFloat(amount),memo});
                }
            });

            const data = await model.insertTransactions(transactions);

            return res.status(200).send({
                message: data
            });
    
        }
        catch(error){
            console.log('Il y a une erreur dans TransactionController:' + error);
        }
    }
}

module.exports = new TransactionsController();