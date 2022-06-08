//Global Constants
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
const limit = 9;
const rating = 'g';


//queries
const gifForm = document.querySelector("form");
const gifArea = document.querySelector("#gif-results");
const gifInput = document.getElementById("search-gif");

//variables
var UserInput = '';

gifForm.addEventListener("submit", getUserInput)

async function getUserInput(evt){
    evt.preventDefault();
    UserInput = gifInput.value;
    console.log("User Input: " + UserInput); 
    const responseData = await getResults(UserInput);
    console.log(111,responseData);
    displayResults(responseData);
}

async function getResults(userInput){
    let apiUrl = 'http://api.giphy.com/v1/gifs/search' + "?api_key="+ API_KEY +"&q="+ userInput + "&limit=" + limit + "&rating=" + rating;
    console.log("apiUrl: " + apiUrl);
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    console.log(jsonResponse.data);
    return jsonResponse.data;
}

function displayResults(response_Data){
    console.log(1234,response_Data);
    //gifArea.innerHTML += `
    //    response.forEach()
    //`
    const gifsImg = response_Data.forEach(element, 
}