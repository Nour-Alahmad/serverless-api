'use strict';
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
    const requestBody = JSON.parse(event.body);

    let res = {
        statusCode: null,
        body: null
    };

    try {
       
        const record = await peopleModel.get(id);

        if (!record) {
            
            res.statusCode = 404;
            res.body = JSON.stringify({ message: 'Record not found' });
        } else {
           
            await peopleModel.update(id, requestBody);

            res.statusCode = 200;
            res.body = JSON.stringify({ message: 'Record updated successfully' });
        }
    } catch (error) {
        res.statusCode = 500;
        res.body = JSON.stringify(error.message);
    }

    return res;
};
