// name = "Mahesh"     //Global
// function a() {
//     var name = "uma"    //Local
// }

// a()
// console.log(name)

var x =10;
function b() {
    var x =1;
    console.log("Local " + x)
    a()
}


function a() {
    var a =2;
    console.log("Inside a() " + x)
    var x = 2;
}

b()
console.log("Global " + x)