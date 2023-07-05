////Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people
// who are 18 years old or older.
const people=[{names:"Loice",age:20},{names:"faith",age:15}]
function older_18(){
let older=[]
for (let i = 0; i < people.length;i++){
 if(people[i].age >=18){
    older.push(people[i].age)
 }
}
return older
}
console.log(older_18())
//students above average
const students=[{name:"loice",scores:[23,35,75,12]},{name:"mary",scores:[83,95,99,100]}]
function above_average(){
   let smart_students=[]
   for (let i = 0; i < students.length; i++) {
     let sum=students[i].scores.reduce((a,b)=>a+b)/students[i].scores.length
     if(sum >=85){
      smart_students.push(students[i].name)
     }
      
   }
   return smart_students
}
console.log(above_average())
////Write a function that takes an array of objects, 
//where each object represents a product with a name, price, and category property//
 //The function should return an object that groups the products by their categories,
// with the category names as keys and the arrays of products as values.
const myproducts=[{name:"laptop",price:5000,category:"electronics"},{name:"samsung"
,price:40000,category:"brandnew"}]
function groupProductsInCategory() {
   const grouped = {};
   myproducts.forEach(product => {
     const category = product.category;
     if (!grouped[category]) {
       grouped[category] = [];
     }
     grouped[category].push(product);
   });
   return grouped;
 }
 console.log(groupProductsInCategory());
//  take two
 const grouping=myproducts.reduce((acc,current)=>{
  return {...myproducts, [current.category]:current}
 },{})
 console.log(grouping)
 //
//  const product = [
//   { name: 'apples', category: 'fruits' },
//   { name: 'oranges', category: 'fruits' },
//   { name: 'potatoes', category: 'vegetables' }
// ];
// function grouping(product){
  

// }
// grouping(product)
const student_records=[{id:12,names:"joe",classes:["english","math"]},{ id:10,names:"mary",classes:["history","math"]
 }]
 const final=student_records.reduce((acc,current)=>{
  return {...acc,[current.names]:current}
 },{}) 
 console.log(final)

 //objects in javacsript
let person=[{myname:"loice",ages:15,scoress:[34,60,50,45],isAvailabe:true},{myname:"faith",ages:23,scoress:[68,90,86,13]
,isAvailabe:true }, {myname:"mary",ages:12,scoress:[23,47,96,23] ,isAvailabe:true}]

 function creatin_obj(person){
 let final=person.filter((each)=>{
   return each.ages >=20
 })
 console.log(final);

 }
 creatin_obj(person)
 function above_avg(person){
   for (let i = 0; i < person.length; i++) {
   let performing=person[i].scoress.reduce((a,b)=>a+b,0)/person[i].scoress.length
   console.log(performing)
   }
 }
 above_avg(person)
 

 //changing status
 function change_status(myname){
   let changing=person.map(each=>{
    if(each.myname===myname){
      return {...each,isAvailabe:false}
    }
   return each
   })
   
   console.log(changing);
 }
change_status("mary");

//
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true,edition:"first edition" },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false,edition:"first edition" },
{ title: 'Crime and Punishment', author: 'Homer', publicationYear:
1866, isAvailable: true ,edition:"first edition"},
{ title: 'The Great Gatsby', author: 'Homer', publicationYear: 1925,
isAvailable: false ,category:"first edition"},
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true ,edition:"second edition"},
];
function getBooksByAuthor(author){
    
  let findby_author=books.filter(each=>{
      if(each.author.includes(author)){
          return each
      }
      
  })
  return findby_author

}
console.log(getBooksByAuthor("Homer"))
//we can also filter => books.filter(function(title)=>{
//return title==="Homer"
//})
//
function counting(author){
  let count=0
 let counting=books.reduce((a,b)=>{
  if(b.author===author){
    count++
   
  }
  return count
 })
  return counting
 
}
console.log(counting("Homer"))
///grouping by editions
// function group_byed(){
// let grouping_byed=books.reduce((a,b)=>{
//   return {...a,[b.edition]:edition}
// },{})
// console.log(grouping_byed);
// }
// group_byed()


