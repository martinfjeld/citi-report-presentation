/**
 * Breaks lines to wherever you want it to break
 * @param  {words} param1 The text you want to break at some point
 * @param  {firstBreak} param2 The word you want to break at
 * @param  {secondBreak} param3 [OPINIONAL] The second word you want to break at
 * @return {Number}      The new sentence with the line-break
 */

export const lineBreak = (words, firstBreak, secondBreak) => {
  let newWords = [];
  words.split(` `).map((word, i) => {
    if (i === firstBreak || i === secondBreak) newWords.push(`\n`);
    newWords.push(word);
  });

  return newWords.join(" ");
};
