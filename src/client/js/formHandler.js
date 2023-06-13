//Global Variables
const postDataURL = 'http://localhost:8081/send-url';
const getDataURL = 'http://localhost:8081/get-article-sentiment-analysis';

const userInputElement = document.getElementById('userInput');
const submitButton = document.querySelector('.userSubmit'); 

const outputSection = document.querySelector('.outputSection');
const errorSection = document.querySelector('.errorSection');
const errorDiv = document.querySelector('.errorDiv');

//handling form
export function handleSubmit(event){
    //prevent default behaviour
    event.preventDefault();

    const userInput = userInputElement.value;

    submitButton.value = 'Evaluating...'

    if(Client.checkUrl(userInput)){ 
        postData(postDataURL, userInput)
        .then(res=>{
            if(res.ok){
               return getData(getDataURL)
            }
        })
        .then((data)=>{
            updateUI(data);
        })
        .catch((error)=>{
            let err = 'Something is going wrong. Try again';
            showError(err);
            console.log(error);
        })
    }
    else{
        let err = "It's not a valid URL. Try to start with http:// or https://";
        showError(err);
    }
}

//Sends the url to the server
async function postData(url='', inputURL){
    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: inputURL})
    });
    return data
}

//Gets the article's sentiment analysis from the server 
async function getData(url=''){
    const data = await fetch(url);
    try{
        const newData = await data.json()
        return newData
    }
    catch(err){
        console.log("error in getting the data")
    }
}

//Updates the user interface with appropriate data
function updateUI(data){    
    const subjectivity = document.querySelector('#subjectivity');
    const score = document.querySelector('#score');
    const irony = document.querySelector('#irony');
    const text = document.querySelector('#text-snippet');

    submitButton.value = 'Submit'

    subjectivity.innerHTML = data.subjectivity;
    score.innerHTML = evaluateScore(data.score_tag);
    irony.innerHTML = data.irony;
    text.innerHTML = data.sentence_list[0].text;

    //hides error section and shows output section
    if(outputSection.classList.contains('hide')){
        outputSection.classList.remove('hide')
    }
    if(!errorSection.classList.contains('hide')){
        errorSection.classList.add('hide')
    }
}

//shows error section
function showError(error=''){

    submitButton.value = 'Submit'

    errorDiv.classList.add('error');
    errorDiv.innerHTML = error;
    errorSection.appendChild(errorDiv);
    
    //hides ouput section and shows error section
    if(!outputSection.classList.contains('hide')){
        outputSection.classList.add('hide')
    }
    if(errorSection.classList.contains('hide')){
        errorSection.classList.remove('hide')
    }
}

//Evaluate score
function evaluateScore(score){
    let score_value = ''

    if(score == 'P+') score_value = 'Strong Positive'
    else if(score == 'P') score_value = 'Positive'
    else if(score == 'NEU') score_value = 'Neutral'
    else if(score == 'N') score_value = 'Negative'
    else if(score == 'N+') score_value = 'Strong Negative'
    else score_value = 'Without Sentiment'

    return score_value
}