//prototypes are template object

//string

//prototypes are template object: means its a object
//prototype contains multiple methods
//if we could create multiple obj with same prototype
//we have access to same method without having to write there own copy

//
String.prototype.dance = function() { // string template is a template object
    return `wowwww ${this.toUpperCase()} can dance`
}

console.log('Gargi'.dance())
console.log('a'.dance())
console.log('b'.dance())
console.log('c'.dance())
console.log('d'.dance())
const arr = [8, 9, 10, 11]
Array.prototype.pop = function() {
        return "Sorry too busy can't pop right noww"
    }
    //we are overwriting an exiting array
console.log(arr.pop())

Array.prototype.push = function() {
    return "not in a mood!"
}

console.log(arr.push(15));
console.log(arr.push(14));
console.log(arr)

//constructor

// let car = {
//     model: "Mustang",
//     speed: 100,
//     steering: "comfortable",
//     mileage: 20,
//     color: "red",
//     wheels: 4,
//     journey: function() {
//         console.log("My engine runs fast ");
//     }
// }
// console.log(car);




function Car(modelName, s, m) {
    // Console.log("this", this)
    this.model = modelName,
        this.speed = s,
        this.mileage = m,
        this.journey = function() {
            console.log("My engine  runsfast")
        }
}

//here's my constructor fn
console.log(Car("Mustang", 120, 80)); // car is my constructor fn
let car1 = new Car("i100", 120, 233) //using new keyword creating a constructor
let car2 = new Car("kia", 120, 233)
let car3 = new Car("ford", 120, 233) // instances of constructor
let car4 = new Car("bmw", 120, 233)
let car5 = new Car("i10", 120, 233)
console.log(car1);

function Figo(CompanyName, s, m) {
    console.log("hiii... i'm this :", this)
    this.Company = CompanyName,
        this.speed = s,
        this.mileage = m,
        this.journey = function() {
            console.log(`My engine  runs fast with mileage ${this.mileage} with speed of ${this.speed}..adding more feautes in cars`)
        }
}
console.log(Figo("Ford", 120, 80));
let f1 = new Figo("Ford new pro max", 110, 122);
console.log(f1);
f1.journey() // calling fn with obj


const obj1 = {
    name: "Gargi",
    func1: function() { "my function/ my method" }
}
console.log(obj1);