/* Whale Talk

Take a phrase like ‘turpentine and turtles’ and 
translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:
1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them 
in our program.

Once we have converted text to the whale language, the 
result is sung slowly, as is a custom in the ocean. */


const input = 'Hi, Human';
const vowels = ['a','e','i','o','u']
const resultsArray = []

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (vowels[v] === input[i]) {
      resultsArray.push(input[i]); }
}
    if (input[i] === 'e') {
      resultsArray.push(input[i]);
    }
    if (input[i] === 'u') {
      resultsArray.push(input[i]);
    }
}

console.log(resultsArray.join("").toUpperCase());

// output "IUUA"