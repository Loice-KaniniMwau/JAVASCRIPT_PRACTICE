//function constructors
function Person(name,age){
this.name=name
this.age=age

//object methods
this.greet=function(){
return(`hello ${this.name}`);
}

}
Person.prototype.height=5.6
let person1=new Person("john",20)
console.log(person1.greet());
console.log(person1.height)
person1.nationality="kenyan"
console.log(person1.nationality);
console.log(person1.name);
//prototypes
//added using the property name .prototype keyword
//and the value

//using classes
class MyCar{
constructor (make,model,speed){
    this.make=make
    this.model=model
    this.speed=speed
}
acceleration(accelerate){
  let speed=this.speed+accelerate
    console.log(speed); 

}
description(){
    console.log(`a ${this.make} ${this.model}`);
}

}
let car1=new MyCar("subaru","legacy",40)
car1.acceleration(12);
car1.description();
//assignment revision
//1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
class Car{
constructor (make,model,year,isAvailable){
this.make=make
this.model=model
this.year=year
this.isAvailable=isAvailable
}
toggleAvailability(){
   return this.isAvailable=!this.isAvailable    
}

}
let car2=new Car("toyota","colora",2020,true)
console.log(car2.toggleAvailability());

//
//Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
//renterName (string): The name of the person who rented the car.
//rentalStartDate (Date object): The start date of the rental period.
//rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
class Rental{
constructor (Car,renterName,rentalStartDate,rentalEndDate){
  this.Car=Car.name
  this.renterName=renterName
  this.rentalStartDate=rentalStartDate
  this.rentalEndDate=rentalEndDate
}
calculateRentalDuration(){
  let rentalduration=(this.rentalEndDate-this.rentalStartDate)/(24*60*60*1000)
  return rentalduration
}
}
let rental1=new Rental("subaru","loice",new Date(2023,4,23,7),new Date(2023,4,30,12))
console.log(rental1.calculateRentalDuration());










