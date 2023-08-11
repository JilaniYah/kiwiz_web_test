const model = require('../models/ReportModel');

class RepportController{

    async getReport(re,res){

        try{

            const transactions  = await model.getReport();
            let grossRevenue    = 0;
            let expenses        = 0;

            await transactions.forEach( transaction=>{

                if( transaction.type === 'Income'){

                    grossRevenue += transaction.amount;
                }
                else if(transaction.type === 'Expense'){

                    expenses += transaction.amount;
                }
            });

            const netRevenue = grossRevenue - expenses;

            const result = {
                'Gross-revenue': grossRevenue,
                'Expenses': expenses,
                'Net-revenue': netRevenue
            };

            return res.status(200).send({
                message: result
            });
        }
        catch(err){
            console.log('Il y a une erreur dans reportController:' + err);
            return res.status(500).send();
        }
    }
}

module.exports = new RepportController();