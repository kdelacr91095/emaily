const express = require('express');
require('./services/passport');

// calling an express function, using one single app 
const app = express();

require('./routes/authRoutes')(app);

//in production
const PORT = process.env.PORT || 5000;
//instructs express to tell node that it wants to listen to the port 5000
app.listen(PORT);
