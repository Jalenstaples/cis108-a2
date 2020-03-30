let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  // This is your job. :)
let points=0;
for(let word of words) {
  points+=scrabbleScore(word);
}
return points/(words.length);
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
console.log(avgScrabbleScore('mom', 'dad', 'Jalen','YES','NO'));
console.log(avgScrabbleScore('HELLO', 'ByE', 'JaLen','YES','NO'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
