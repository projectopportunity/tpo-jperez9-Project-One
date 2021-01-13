/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Quotes within an array of objects

let quotes = [
  {
    quote: "Stay positive and love your life!",
    source: "Nick Hexum",  
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walk Disey",
  },
  {
    quote: "It is a mistake to look too far ahead. Only one link in the chain of destiny can be handled at a time.",
    source: "Winston Churchill",
    year: "1945",
  },
  {
    quote: "What we think, we become.",
    source: "Buddha",
  },
  {
    quote: "I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation: "The Office",
    year: "2007"
  }

];


/***
 * `getRandomQuote` function
***/

//getRandomQuote function will obtain a random quote

function getRandomQuote() 
{
  let getQuote = Math.floor(Math.random() * Math.floor(quotes.length) ); //Assigns a random number to quote.length using Math.floor()
  return quotes[getQuote]; //This will issue a random number so it can obtain a new randomized quote
}


/***
 * `printQuote` function
***/
// this will call the return of a random quote 
function printQuote() 
{
  let randomQuote = getRandomQuote(); //This will call getRandomQuote() to obtain a new quote

  let quoteInfo = `<p class="quote">${randomQuote.quote}</p>
                   <p class="source">${randomQuote.source}`;

if (randomQuote.citation) { //This will verify whether the quote contains a citation or not
  quoteInfo += `<span class="citation">${randomQuote.citation}</span>`; 
}

if (randomQuote.year) { //This will verify whether the quote contains a year or not
  quoteInfo += `<span class="year">${randomQuote.year}</span>`; 
}

quoteInfo += "</p>"; //closed tag for html info

document.getElementById('quote-box').innerHTML = quoteInfo;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);