console.log('Welcom to ReGeX');

//regular expression literal

let reg = /fox/; // This is a regular expression literal in js
reg = /fox/g; // g means global
// reg = /harry/i; // i means case insensitive

let s = 'The red fox jumped over the fence, while black fox stared';

//Functions to match expressions

//exec: This method will executes a search for a match in a string.
//It returns an array of information or null on a mismatch.
let result1 = reg.exec(s);
console.log('exec\n '+ result1);    //---> We can use multiple exec with global flag
// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }



//test: This method tests for a match in a string. It returns true or false.
let result2 = reg.test(s);
console.log('test\n ' + result2);

//match: This method will return an array containing all of the matches,
//including capturing groups, or null if no match is found.
let result3 = s.match(reg);
console.log('match\n ' + result3);

//search: This method will tests for a match in a string. It returns the
//index of the match, or -1 if the search fails.
let result4 = s.search(reg);
console.log('search\n ' + result4);

//replace: This method will executes a search for a match in a string, and
//replaces the matched substring with a replacement substring.
let result5 = s.replace('fox', 'dog');
console.log('replace\n ' + result5);

//split: This method uses a regular expression or a fixed string to break a
//string into an array of substrings. 
const test = /[\s,]+/;
let result6 = s.split(reg);
console.log('split\n ' + result6); // ["I", "am", "learning", "JavaScript", "RegEx"]