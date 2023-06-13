//handling form
export function handleSubmit(event){
    //prevent default behaviour
    event.preventDefault();

    const postDataURL = 'http://localhost:8081/send-url';
    const getDataURL = 'http://localhost:8081/get-article-sentiment-analysis';

    const userInputElement = document.getElementById('userInput');
    const userInput = userInputElement.value;

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
        console.log("Heres our newData", newData)
        return newData
    }
    catch(err){
        console.log("error in getting the data")
    }
}

//Updates the user interface with appropriate data
function updateUI(data){
    const outputSection = document.querySelector('.outputSection');
    const errorSection = document.querySelector('.errorSection');

    const errorDiv = document.querySelector('.errorSection');
    
    const outputURL = document.querySelector('#url');
    const subjectivity = document.querySelector('#subjectivity');
    const score = document.querySelector('#score');
    const irony = document.querySelector('#irony');
    const text = document.querySelector('#text-snippet');

    outputURL.innerHTML = data.data.url;
    subjectivity.innerHTML = data.data.subjectivity;
    score.innerHTML = data.data.score_tag;
    irony.innerHTML = data.data.irony;
    text.innerHTML = data.data.sentence_list[0][0].text;

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
    const outputSection = document.querySelector('.outputSection');
    const errorSection = document.querySelector('.errorSection');

    const errorDiv = document.querySelector('.errorDiv');
    const output = document.querySelector('.analysisOutput');

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