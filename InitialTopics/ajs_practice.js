// function Person(name,age,gender){
//     this.name = name
//     this.age = age
//     this.gender = gender

// }
// let Person1 = new Person("A",23,"male")
// console.log(Person.__proto__.__proto__)

// let student = {
//     name : "kunal"
// }
// console.log(Function.prototype)


// function greet(name,callback){
//     console.log("hi")
//     callback(name)
// }
// function sayName(name){
//     console.log("hi "+name)
// }
// setTimeout(greet,1,"kunal",sayName)
//=============================================================================
// function Airplane (name){
//     this.name = name
//     this.isflying = false
// }
//     Airplane.prototype.takeoff = function (){
//         return `flight ${this.name} is flying ${this.flying = true}`
//     }
//     Airplane.prototype.land = function (){
//         return `flight ${this.name} is flying ${this.flying= false}`
//     }

// let indigo = new Airplane ("indigo")
// console.log(indigo.takeoff()); 
// console.log(indigo.land());
// //===============================================================================
// function car (model,mpg){
//     this.model = model
//     this.mpg = mpg
//     this.tank = 0
//     this.odometer = 0
// }
// car.prototype.fill = function(gallons){
//     this.tank += gallons
// }
// car.prototype.drive = function(distance){
//     if (this.tank == 0 || this.tank-this.mpg <= 0){return `I ran out of fuel at ${this.odometer} miles!`}
//     this.odometer += distance
//     this.tank -= distance/this. mpg
//     return "currently driving"
// }
// let maruti = new car ("maruti",1)
// maruti.fill(20)
// console.log(maruti.drive(2))
// console.log(maruti.drive(4))
// console.log(maruti.drive(7))
// console.log(maruti.drive(8))
// console.log(maruti.drive(23))
// console.log(maruti.drive(21))
// // ==========================================================================

