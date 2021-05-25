//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const findAnagrams = (word, arr) => {
  word = word.toLowerCase();

  function isAnagram(anagram) {
    if (word.length !== anagram.length) return false
    anagram = anagram.toLowerCase();
    if (word === anagram) 
    return false
    for (let letter of word) {
      anagram = anagram.replace(letter, "");
    }
    return !anagram;
  }
  return arr.filter(isAnagram);
};