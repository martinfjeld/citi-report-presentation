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
    return newWords.push(word);
  });

  return newWords.join(" ");
};

/**
 * BÆSJEN
 * @param  {words} param1 The text you want to break at some point
 * @param  {firstBreak} param2 The word you want to break at
 * @param  {secondBreak} param3 [OPINIONAL] The second word you want to break at
 * @return {Number}      The new sentence with the line-break
 */
export const paragraphColumns = (par, wordLimit = 100, width) => {
  // Holding current words
  let wordHolder = [];

  // Holding paragraphs
  let paragraphs = [];

  // Counting words
  let counter = 0;

  // Making array from paragraph
  let words = par.split(" ");
  words.map((word, i) => {
    counter++;
    wordHolder.push(word);
    if (counter === Number(wordLimit)) {
      paragraphs.push(`${wordHolder.join(" ")}`);
      wordHolder.push(word);
      counter = 0;
      wordHolder = [];
    } else if (i === words.length - 1) {
      paragraphs.push(`${wordHolder.join(" ")}`);
      counter++;
    }
  });

  console.log(paragraphs);

  return paragraphs.map((par) => {
    return (
      <p
        style={{
          width: `${100 / Number(width)}%`,
        }}
      >
        {par}
      </p>
    );
  });
};
