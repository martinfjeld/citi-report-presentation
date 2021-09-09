/**
 * Breaks lines to wherever you want it to break
 * @param {string} words The text you want to break at some point
 * @param {number} firstBreak The word you want to break at
 * @param {number} [secondBreak] [Optional] The second word you want to break at
 * @return The new sentence with the line-break
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
 * @param {string} paragraph The textdump you want to format
 * @param {number} wordLimit The limit of text for each paragraph (default = 100)
 * @param {number} columns The number of columns you want on the DOM
 * @return The text formatted into nodes
 */
export const paragraphColumns = (
  paragraph = "",
  wordLimit = 100,
  columns = 2
) => {
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
  return paragraphs.map((par, i) => {
    return (
      <p
        key={i}
        style={{
          width: `${100 / Number(columns)}%`,
        }}
      >
        {par}
      </p>
    );
  });
};

// /**
//  * Function to render full page text to the DOM
//  * @param {children}
//  * @return full page image with text (scrollytelling)
//  */

// export const childrenRender = (children) => {
//   return children.map((child, i) => {
//     return <div className="full-page-paragraph">{child}</div>;
//   });
// };
