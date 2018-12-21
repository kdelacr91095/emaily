const express = require('express');
// calling an express function, using one single app 
const app = express();


//creating a route handeler 
//req is the object representing the incoming request
//res is the object representing the outgoing response
app.get('/',(req, res) => {

    res.send({hi: 'there'});
});

//in production
const PORT = process.env.PORT || 5000;
//instructs express to tell node that it wants to listen to the port 5000
app.listen(PORT);
