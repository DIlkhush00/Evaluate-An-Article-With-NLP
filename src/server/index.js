//Require Path to handle path related things
const path = require('path');
// Require Express to run server and routes
const express = require('express');

//Path for static files
const clientPath = path.join(__dirname, '../client');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the Client folder
app.use(express.static(clientPath));


//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/views', 'index.html'));
})

// Setup Server
const PORT = 8080;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}