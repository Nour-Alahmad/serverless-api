'use strict';
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
   
    const id = event.pathParameters.id;

    let res = {
        statusCode: null,
        body: null
    };

    try {
       
        await peopleModel.delete(id);

        res.statusCode = 200;
        res.body = JSON.stringify({ message: 'Record deleted successfully' });
    } catch (error) {
        res.statusCode = 500;
        res.body = JSON.stringify(error.message);
    }

    return res;
};
