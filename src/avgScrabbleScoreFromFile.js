let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  let scrabbleArray=fs.readFileSync(`../src/${fileName}`,'utf-8').split('\n');
  let average=avgScrabbleScore(scrabbleArray);
  return average;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('sample-words.txt'));
  console.log(avgScrabbleScoreFromFile('sample2.txt'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
