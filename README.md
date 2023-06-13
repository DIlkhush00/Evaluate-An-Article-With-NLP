# Evaluate a News Article with NLP
This project is made for Udacity's Front End Developer Nanodegree Program.

## Table of Contents
- [Evaluate a News Article with NLP](#evaluate-a-news-article-with-nlp)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Technology Used](#technology-used)
- [Preview](#preview)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Development Mode](#development-mode)
- [Testing](#testing)

## Description
This application does a sentiment analysis of an article using MeaningCloud's Sentiment Analysis API  and article's URL is provided by the user using this application's user-friendly interface.

## Technology Used
This application is mainly built with: 
- HTML
- SCSS
- JavaScript
- Node.js
- Express.js
- MeaningCloud's Sentiment Analysis API version 2.1
- Webpack
- Jest
- Workbox


## Preview
![Preview](https://github.com/DIlkhush00/This-repo/blob/master/images/preview.png)

## Prerequisite
-  You must have `Node.js` installed on your computer
- Get your personal API key from [MeaningCloud](https://www.meaningcloud.com/developer/)

## Installation
1. Clone the repo
```sh
git clone https://github.com/DIlkhush00/This-repo/
``` 
2. Run the following Command in terminal to install necessary dependencies
```sh
npm install
```

3. Create a file with `.env` extension and copy below code and paste it into that file. Now replace `*****` with your personal API key
```javascript
API_KEY = ***** //Replace ***** with your personal API key
```
4. Run following command in terminal to build `dist` folder
```sh
npm run build-prod
```
5. Finally, run following command in terminal
```sh
npm run start
```
6. Open any browser and visit the following url `http://localhost:8081/`
7. There you go :rocket:

## Development Mode
To run the project in development mode run following command in the terminal
```sh
npm run build-dev
```
Now open any browser and visit `http://localhost:8080/`

## Testing
Testing is done using Jest framework. To perform unit testing, run following command in the terminal
```sh
npm run test
```

