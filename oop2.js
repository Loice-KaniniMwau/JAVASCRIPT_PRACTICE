// 
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
     
    }
    set setSkill(skill) {
      this.skills.push(skill)
     
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let info=`${fullName} , lives in ${this.city} and knows ${this.getSkills}`
      return info
    //   let skills =
    //     this.skills.length > 0 &&
    //     this.skills.slice(0, this.skills.length - 1).join(', ') +
    //       ` and ${this.skills[this.skills.length - 1]}`
    //   let formattedSkills = skills ? `He knows ${skills}` : ''
  
    //   let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    //   return info
    }
  }
  let person1=new Person("loice","kanini",20,"kenya","nairobi")
  console.log(person1.getFullName())
  console.log(person1.getScore)
  console.log (person1.getSkills)
   person1.setScore=0
  person1.setSkill="HTML"
  person1.setSkill="JavaScript"
  person1.setSkill="css"
  console.log(person1.getSkills)
  console.log(person1.getPersonInfo())

//   static methods
// Inheritance
// Using inheritance we can access all the methods and properties of the paren
// class 
// we can also override the same methods and modify them 
class ChildClassName extends Person{
    constructor(firstName, lastName, age, country, city,gender){
        super(firstName, lastName, age, country, city)
        this.gender=gender
        
    }
}
let child=new ChildClassName("mary","njoki",20,"kenya","kisumu")
console.log(child.getFullName);
console.log(child.setScore=0);
console.log(child.setSkill="css")
console.log (child.setSkill="javascript") 
console.log( child.setSkill="kotlin") 
console.log(child.getPersonInfo());