const mockAPI = require('./mockAPI');


const dotenv = require('dotenv')
dotenv.config()

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
  
const baseURL = "https://api.meaningcloud.com/sentiment-2.1"
let inputURL
const data = {
    sentence_list: []
}

//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

app.post('/send-url', (req, res)=>{
    console.log('url got!');
    console.log(req.body.data)
    inputURL = req.body.data
    res.sendStatus(200)
})

app.get('/get-article-sentiment-analysis', async (req, res)=>{
    console.log("here's the object data", data)
    try {
        const evalutionData = await fetch(`${baseURL}?key=${process.env.API_KEY}&lang=auto&url=${inputURL}`)
        const newData = await evalutionData.json()
        data['subjectivity'] = newData.subjectivity
        data['agreement'] = newData.agreement
        data['confidence'] = newData.confidence
        data['irony'] = newData.irony
        data['score_tag'] = newData.score_tag
        data['sentence_list'][0] = newData.sentence_list[0]
        console.log("New data: ", data)
        res.send(data)
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
})

app.get('/test', (req, res)=>{
    res.send(mockAPI)
})


// Setup Server
const PORT = 8081;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}