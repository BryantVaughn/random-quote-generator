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

const quotes = [
	{
		quote: 'Java is to JavaScript what car is to carpet.',
		source: 'Chris Heilmann'
	},
	{
		quote: 'Before software can be reusable it first has to be usable.',
		source: 'Ralph Johnson'
	},
	{
		quote: `Code is like humor. When you have to explain it, it's bad`,
		source: 'Cory House'
	},
	{
		quote:
			'The future belongs to those who believe in the beauty of their dreams.',
		source: 'Eleanor Roosevelt'
	},
	{
		quote:
			'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
		source: 'Albert Einstein',
		citation:
			'What Life Means to Einstein: An Interview by George Sylvester Viereck'
	},
	{
		quote: `I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.`,
		source: 'Abraham Lincoln'
	},
	{
		quote:
			'I know I have but the body of a weak and feeble woman; but I have the heart of a king...',
		source: 'Elizabeth I',
		year: 1588
	}
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
