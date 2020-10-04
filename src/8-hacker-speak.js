export const hackerSpeak = (words) => {
//   if (words.includes([a, e, i, o, s])) 
//     return words.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5);

//   else (words.includes([A, E, I, O, S])) 
//     return words.replace(/A/gi, 4).replace(/E/gi, 3).replace(/I/gi, 1).replace(/O/gi, 0).replace(/S/gi, 5);
// }


  // words.replace(/a/gi, 4);
  // words.replace(/e/gi, 3);
  // words.replace(/i/gi, 1);
  // words.replace(/o/gi, 0);
  // words.replace(/s/gi, 5);
  // return words;
  //"" around letters not working - because it's not a single-letter string?
  // WORKING
  return words.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5);
}
