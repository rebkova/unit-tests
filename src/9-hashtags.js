export const hashtags = (text) => {
  const regEx = /#[a-zA-Z]+/g;
  return text.match(regEx);
  //https://stackoverflow.com/questions/38506598/regular-expression-to-match-hashtag-but-not-hashtag-with-semicolon
  //https://stackoverflow.com/questions/21421526/javascript-jquery-parse-hashtags-in-a-string-using-regex-except-for-anchors-i
  //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2
  // const regEx = /#[a-z\d-]+/g;
}
