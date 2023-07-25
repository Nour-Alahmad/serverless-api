'use strict';
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  let { id, name, email } = JSON.parse(event.body);
  let newPeople = { id, name, email };

  let res = {
    statusCode: null,
    body: null
  };

  try {
    let newPerson = await peopleModel.create(newPeople);
    res.statusCode = 200;
    res.body = JSON.stringify(newPerson)
}
catch (error) {
    res.statusCode = 500;
    res.body = JSON.stringify(error.message);
}

return res;


}