/*
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 *
 * Second argument is the word that you will be replacing (before).
 *
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Note:
 * Preserve the case of the first character in the original word when you are replacing it.
 * For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */
function myReplace(str, before, after) {
  let firstLetter;
  let bufferArr = [];
  let newAfter = after;

  if (/^[A-Z]/.test(before) && /^[a-z]/.test(after)) {
    bufferArr = after.match(/^[A-Za-z]/);
    firstLetter = bufferArr[0];
    newAfter = after.replace(/^[A-Za-z]/, firstLetter.toUpperCase());
  } else if (/^[a-z]/.test(before) && /^[A-Z]/.test(after)) {
    bufferArr = after.match(/^[A-Za-z]/);
    firstLetter = bufferArr[0];
    newAfter = after.replace(/^[A-Za-z]/, firstLetter.toLowerCase());
  }
  console.log(newAfter);

  return str.replace(before, newAfter);
}
console.log(
  myReplace("Let us get back to more coding", "coding", "Algorithms")
);
console.log(myReplace("Something to change", "change", "replace"));

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch

// console.log(myReplace("I think we should look up there", "up", "down"));
// I think we should look down there

// console.log(myReplace("His name is Tom", "Tom", "john"));
// His name is John

// console.log(
//   myReplace("Let us get back to more Coding", "Coding", "algorithms")
// );
// Let us get back to more Algorithms
