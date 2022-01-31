/* Mini Linter

In this project, you will use what you know about iterating 
over arrays to improve the quality of a paragraph and gather 
some information about that paragraph.

This is the same type of work that word processing software 
does. Additionally, you may have heard of linting, a process 
by which text is evaluated and improved by an application. 
In this project, you will create a miniature version of a 
linter using array methods that you have learned. */

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let storyWords = story.split(' '); // (1) split string into array of words
// (2) word count: console.log(`Your story is ` + storyWords.length + ` words long!`); 

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word)); // (3) filter out unnecessary words

// (4) identify overused words in story and show total count of times used 
let really = 0
let very = 0
let basically = 0

for (word of storyWords) {
    if (word === 'really') {
        really += 1;
    } else if (word === 'very') {
        very += 1; 
    } else if (word === 'basically') {
        basically += 1;
    }
};

// (5) count the number of sentences
let sentences = 0;

for (word of storyWords) {
    if (word[word.length -1] === '.') {
    sentences += 1;
} else if (word[word.length -1] === '!') {
    sentences += 1;
}};


// (6) Log these items to the console: The word count, The sentence count, & The number of times each overused word appears
console.log(`Word Count: ${storyWords.length}`); 
console.log(`Sentence Count: ${sentences}`);
console.log(`Overused words: 'Really' (${really}), 'Very' (${very}), 'Basically' (${basically})`);

// (7) Log betterWords array as a single string.
console.log(betterWords.join(' '));