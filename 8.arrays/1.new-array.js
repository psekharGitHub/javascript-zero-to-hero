/*
?  - used to store large amount of data
?  - can hold heterogenous data
?  - uses paranthesis, array literal uses square braces
*/

var data1 = new Array("Scott", "Adam", "Tuan")
console.log(data1)
console.log(data1[0])
console.log(data1[1])
console.log(data1[2])
console.log(data1[3])   //undefined out of bounds

var data2 = new Array(3)    //initial length is 3, but may increase dynamically

data2[0] = "Red"
data2[1] = "Blue"
data2[2] = "Green"
data2[3] = "Yellow"     //size of array increases dynamically
console.log(data2)
