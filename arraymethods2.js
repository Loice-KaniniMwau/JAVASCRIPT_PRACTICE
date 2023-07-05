//for each
let add=0
function sum(numbers){
    numbers.forEach((num=>{
      add+=num
    }))
    return add
}
console.log(sum(numbers=[1,2,3,4]))
// .reduce
function addition(nums){
 let additionn= nums.reduce((a,b)=>{return a+b
    },0)
    console.log(additionn);
}
addition(nums=[1,2,3,4])
// filter
var people=[{names:"loice",age:13},{
names:"kanini",age:16},{names:"jecinta",age:19
}]
var final=people.filter(adults=>{
   
    return adults.age>18
  

})
console.log(final);
// sorting an array
function sorting(number){
  let sorting=number.sort((a,b)=>{
    return a-b
    // sorting in descending order=>return b-a
  })
  console.log(sorting);
}
sorting(number=[13,5,56,24,78,3])
// array objects
let students=[{name:"loice",age:20},{name:"mary",age:14},{name:"faith",age:25}]
function filter(students){
  let filter=students.filter((each)=>{
    return each.age>18
  })
  console.log(filter);
}
filter(students)
// students records
let students_records=[{name:"kanini",age:20,scores:[23,45,69,60]},
{name:"kimani",age:25,scores:[89,75,99,80]}]

function above(students_records){
 for(let i=0;i<students_records.length;i++){
  let empty=[]
  
  let division= students_records[i].scores.reduce((a,b)=>a+b)/students_records[i].scores.length
  if(division>85)
  empty.push(division)
  console.log(empty);
 }

}
above(students_records)
// categories
function category(students_records){
  let grouped={}
  students_records.forEach((product)=>{
    let category=product.name
    if(!grouped[category]){
      grouped[category]=[]
      grouped[category].push(product)
    }

  })
  return grouped
}
console.log(category(students_records))
// take two
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Banana', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Potato', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
];
const group={}
for(let item of items){
  let category=item.category
  if(!group[category]){
    group[category]=[]
    
  }
  group[category].push(item)

}
console.log(group);
// changing the status of an object in an objects array
