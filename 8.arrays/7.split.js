/*
? Convert string into array
*/

var movieString = "Avatar, Good Will Hunting, Vanilla Sky, Mars"

var movies = movieString.split(",")

console.log(movies, typeof movies)

//Split every character
var moviesChar = movieString.split("")
console.log(moviesChar, typeof moviesChar)