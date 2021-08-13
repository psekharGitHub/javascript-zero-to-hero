// name = "Mahesh"     //Global
// function a() {
//     var name = "uma"    //Local
// }

// a()
// console.log(name)


var x =10;
function b() {
    var x =1;
    a()
}

function a() {
    var a =2;
    var x =5;
}

b()
console.log(x)