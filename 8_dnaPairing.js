/*
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 *
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 *
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */
function pairElement(str) {
  let splitedStr = str.split("");
  let arr = [];
  //console.log(splitedStr);

  for (let i = 0; i < splitedStr.length; i++) {
    let buff = [];
    switch (splitedStr[i]) {
      case "A":
        buff = ["A", "T"];
        break;
      case "T":
        buff = ["T", "A"];
        break;
      case "C":
        buff = ["C", "G"];
        break;
      case "G":
        buff = ["G", "C"];
        break;
    }
    arr.push(buff);
  }
  //console.log(arr);
  return arr;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
