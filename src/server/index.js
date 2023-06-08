//Require Path to handle path related things
const path = require('path');
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Initialize the Client folder
app.use(express.static(path.join(__dirname, '../../dist')));


//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

// Setup Server
const PORT = 8080;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}