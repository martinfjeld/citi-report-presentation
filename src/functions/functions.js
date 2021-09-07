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
 * Breaks a massive list of words into different paragraphs to the DOM
 * @param  {paragraph} param1 The textdump you want to format
 * @param  {wordLimit} param2 The limit of text for each paragraph (default = 100)
 * @param  {columns} param3 The number of columns you want on the DOM
 * @return {Nodes}      The text formatted into nodes
 */
export const paragraphColumns = (paragraph, wordLimit = 100, columns) => {
  // Holding current words
  let sentenceBuilder = [];

  // Holding paragraphs
  let paragraphs = [];

  // Counting words
  let counter = 0;

  // Making array from paragraph
  let words = paragraph.split(" ");
  words.map((word, i) => {
    counter++;
    sentenceBuilder.push(word);

    // If the counter has reached the given (or default=100) wordlimit
    if (counter === Number(wordLimit)) {
      // Push the new paragraph into the paragraphs array
      paragraphs.push(`${sentenceBuilder.join(" ")}`);

      // Reset counter and the sentence builder to create new ones
      counter = 0;
      sentenceBuilder = [];

      // If the current iteration has reached it's last word
    } else if (i === words.length - 1) {
      // Prevent awkward length on new paragraph
      if (sentenceBuilder.length < 30) {
        let newSentence = paragraphs[paragraphs.length - 1];
        paragraphs.pop();
        return paragraphs.push(newSentence + " " + sentenceBuilder.join(" "));
      }
      paragraphs.push(`${sentenceBuilder.join(" ")}`);
    }
  });

  // Return the new sentences and wrap them into <p> tags
  return paragraphs.map((par) => {
    return (
      <p
        style={{
          width: `${100 / Number(columns)}%`,
        }}
      >
        {par}
      </p>
    );
  });
};
