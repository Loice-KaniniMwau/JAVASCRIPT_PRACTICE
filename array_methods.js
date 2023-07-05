//.map
//create a variable to hold the map call back function
//console.log the variable
const numbers=[1,2,3,4,5]
const final= numbers.map(double)
function double(value){
 return value *value
}
console.log(final)
//array of objects
const mynumns=[{names:"laptop",price:20000,count:5},{names:"iphonex",price:45000,count:11},{names:"infinix"
,price:12000,count:20}]
const final_count=mynumns.map(all);
function all(value){
 return value.names
}
console.log(final_count)
    
//using an arrow function
const multiply=mynumns.map(value=>{
    return value.price * value.count
})
console.log(multiply)
//for each-requires a callback function
let mynums=[1,2,3,4,5,6]
mynums.forEach(nu)
function nu(item,index,arr){
 console.log(item)
}
//getting sum
//arrow function doesnt require paranthesis
let sum=0;
mynums.forEach(item=>{
    return sum+=item
})
console.log(sum)
     occurrence


     for(let i=100;i>=1;i--){
        console.log(i*i)
     }

  //palindrome
  
    
   
    
    





