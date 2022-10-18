function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
let revers = reverseString("hello");
console.log(revers);
