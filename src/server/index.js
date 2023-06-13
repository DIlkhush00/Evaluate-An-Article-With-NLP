const mockAPI = require('./mockAPI');

//Require Path to handle path related things
const path = require('path');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the Client folder
app.use(express.static(path.join(__dirname, '../../dist')));
  
let obj = {
    url: '',
    subjectivity: 'OBJECTIVE',
    irony: 'NONIRONIC',
    score_tag: 'P+',
    sentence_list: [
        {
            0: {
                text: "I had a lot of fun!"
            }
        }
    ],
}

//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

app.post('/send-url', (req, res)=>{
    console.log('url got!');
    console.log(req.body.data)
    obj['url'] = req.body.data
    res.sendStatus(200)
})

app.get('/get-article-sentiment-analysis', (req, res)=>{
    console.log("here's the object data", obj)
    res.send({data: obj})
})

//for testing
app.get('/test', (req, res)=>{
    res.send(mockAPI)
})


// Setup Server
const PORT = 8081;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}