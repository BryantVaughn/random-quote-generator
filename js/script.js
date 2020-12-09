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
		source: 'Chris Heilmann',
		tags: ['tech', 'code']
	},
	{
		quote: 'Before software can be reusable it first has to be usable.',
		source: 'Ralph Johnson',
		tags: ['tech', 'code']
	},
	{
		quote: `Code is like humor. When you have to explain it, it's bad`,
		source: 'Cory House',
		tags: ['tech', 'code', 'humor']
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		source: 'Eleanor Roosevelt',
		citation: 'This is My Story',
		tags: ['motivation', 'inspiration', 'wisdom']
	},
	{
		quote:
			'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
		source: 'Albert Einstein',
		citation:
			'What Life Means to Einstein: An Interview by George Sylvester Viereck',
		tags: ['motivation', 'inspiration', 'historic']
	},
	{
		quote: `I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.`,
		source: 'Abraham Lincoln',
		tags: ['motivation', 'inspiration', 'historic']
	},
	{
		quote:
			'I know I have but the body of a weak and feeble woman; but I have the heart of a king...',
		source: 'Elizabeth I',
		year: 1588,
		tags: ['motivation', 'historic']
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		source: 'Mahatma Gandhi',
		tags: ['change', 'inspiration']
	},
	{
		quote:
			'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
		source: 'Dr. Martin Luther King Jr.',
		citation: 'A Testament of Hope: The Essential Writings and Speeches',
		tags: ['inspiration', 'peace', 'historic']
	}
];

const backgroundColors = [
	'#422fcc',
	'#1e9eab',
	'#ae123a',
	'#ce731d',
	'#27284d',
	'#7d7a73',
	'#863da5',
	'#23a659',
	'#1f478a'
];

/***
 * `getRandomQuote` function
 * Calls for random number and returns a quote from the quotes array.
 ***/

function getRandomQuote() {
	// Generate random number between 0 and quotes length - 1
	const randomNumber = generateRandom(quotes.length);
	// Return quote object at random number index
	return quotes[randomNumber];
}

/***
 * `generateRandom` function
 * Generates a random number between 0 and length passed in.
 ***/

function generateRandom(upperBound) {
	return Math.floor(Math.random() * upperBound);
}

/***
 * `buildTagList` function
 * Builds an unordered list from the tags property in the quote object.
 ***/

function buildTagList(tags) {
	let tagsList = '<ul class="tag-list">';
	tags.map((tag) => {
		tagsList += `<li class="tag">${tag}</li>`;
	});
	tagsList += '</ul>';
	return tagsList;
}

/***
 * `printQuote` function
 * Retrieves a random quote and updates the HTML to display new quote.
 ***/

function printQuote() {
	// Retrieve random quote object
	const quote = getRandomQuote();

	// Set body background to random color
	setBackgroundColor();

	// Build base HTML with quote and source
	let htmlString = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

	// Check quote object for citation and year properties
	// Add to HTML if present
	if (quote.citation)
		htmlString += `<span class="citation">${quote.citation}</span>`;
	if (quote.year) htmlString += `<span class="year">${quote.year}</span>`;

	htmlString += `${buildTagList(quote.tags)}</p>`;

	// Update quote-box HTML to new random quote
	document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * `setBackgroundColor` function
 * Calls the getRandomBackgroundColor function and sets the returned value to the body background.
 ***/

function setBackgroundColor() {
	document.body.style.backgroundColor = getRandomBackgroundColor();
}

/***
 * `getRandomBackgroundColor` function
 * Generates a random number and returns the background color from backgroundColors array.
 ***/

function getRandomBackgroundColor() {
	const randomNumber = generateRandom(backgroundColors.length);
	return backgroundColors[randomNumber];
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

// Automatically refresh quote every 10 seconds
document.addEventListener('DOMContentLoaded', () => {
	setInterval(() => {
		printQuote();
	}, 10000);
});
