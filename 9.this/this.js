/*
    ?- In a browser, global object of JS is Window(browser specific)
*/
console.log(this)   //this - points to global object

function sample() {
    console.log(this)   //this - points to global object
}

sample()

var b = function() {
    console.log(this)   //this - points to global object
}

b()

/*
? when function is outside object, then
? this points to global object
*/
function test(){
    console.log(this)
    this.newVariable = "hello"
}

test()

console.log(newVariable)

/*
? when function is inside an object, then
? 'this' keyword will point to the object it is in
*/
  var obj = {
    name: 'uma',
    log: function(){
        console.log(this)
    }
}
obj.log()
console.log("------------------------")

var studentObj = {
    name: "Scott",
    log: function() {
        this.name="Desatnick"
        console.log(this)       //this points to Local Object 'Destanick' insted of Global Object 'Scott'
    }
}

studentObj.log()
console.log("------------------------")

var studentObj = {
    name: "Scott",
    log: function() {
        this.name="Desatnick"
        console.log(this)       //this points to Local Object 'Destanick' insted of Global Object 'Scott'
        
        var setName = function() {
            this.name = "Peter"
            console.log(this)
        }
        setName()
        console.log(this)
    }
}

studentObj.log()

var studentObj = {
    name: "Scott",
    log: function() {
        var self = this

        self.name = 
        setName()
        console.log(this)
    }
}

