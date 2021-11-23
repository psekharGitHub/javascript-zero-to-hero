console.log('Welcome to tutorial 29')

const proto = {
    slogan: function () {
        return 'This company is the best';
    },
    changeName: function (newName) {
        this.name = newName;
    }
}


// This creates harry object
const harry = Object.create(proto);
harry.name = 'harry';
harry.role = 'developer';
harry.changeName('Harry2');
//console.log(harry);

// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
console.log(harry1);

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name,
    this.salary = salary,
    this.experience = experience
}

//Slogan
Employee.prototype.slogan = function () {
    return `This company is the best, Regards ${this.name}`;
}
// an object from this constructor now
let harryObj = new Employee('harry', 34000, 10);
console.log(harryObj);
console.log(harryObj.slogan());

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let prog = new Programmer('mike', 15000, 12, 'javascript');
console.log(prog);

function Flour(flourType, brand, quantity) {
    this.flourType = flourType,
    this.brand = brand,
    this.quantity = quantity
}

Flour.prototype.mix = function () {
    return 'Mixing of flour';   
}

function Cake(flourType, brand, quantity, flavour) {
    Flour.call(this, flourType, brand, quantity);
    this.flavour = flavour;
}
//Manually set the prototype
//Inherit prototype and constructor of parent
Cake.prototype = Object.create(Flour.prototype)

//Set constructor of child
Cake.prototype.constructor = Cake;

let cake = new Cake('plain', 'aashirvad', 2, 'chocolate');
console.log(cake);