//Print all even numbers from 0 – 10
function even (){
    
}
console.log(even())

//Print a table containing multiplication tables
//Create a length converter function
//Remove the spaces found in a string 
// function remove_spaces(mystrings){
// let splitting=mystrings.foreach(i.split(" "))

// }
// mystrings=[" kanini", "mar y"," ome nta","ki mani"]
// remove_spaces(mystrings)
//Create a function that filters out negative numbers
function filter_negNums(mynums){
    let final_nums=mynums.filter(element=>{
        if (element >=0){
            return element
        }
       
    })
    console.log(final_nums)
}

mynums=[-1,-10,9,15,89,45,23,-4]
filter_negNums(mynums)
//Sort an array from lowest to highest
function reverse (reversed_nums){
    let reversed=reversed_nums.sort((a,b)=>{
        return a-b
       
    })
    console.log(reversed)
}
reversed_nums=[12,67,1,9,23,56,34]
reverse(reversed_nums)
//Create a function that reverses an array 
function inverse(myarray){
let reversing=myarray.reverse()
console.log(reversing)
}
myarray=[73,1,9,12,56,5,34]
inverse(myarray)

function odd_numbers(integers){
    let sum=0
for(let i=0; i < integers.length; i++){
    if (integers[i] %2 !==0){
         
         sum+=(integers[i] * integers[i])
         
    }
   
   
}
console.log(sum)

}
integers=[1,2,3,4,5,6,7]
odd_numbers(integers)
//Write a function that takes two arrays of integers and returns a new array that co
//ntains all the integers that are present in both input arrays.
let num1=[1,2,3,4,5,6,7]
let num2=[1,3,5,7,8,9,10]
const [set1,set2]=[new Set(num1),new Set(num2)]
const common=[...set1].filter(element=>set2.has(element))
console.log(common)
//take two
let mynum1=[1,2,3,4,5,6,7]
let mynum2=[2,4,5,8,9,10]
let final=[...mynum1,...mynum2]
final=final.filter((element,index)=>{
return final.indexOf(element)!==index
})
console.log(final)
//Write a function that takes an array of integers 
//and returns the second highest integer in the array.
function mynumbers(myint){
let sorting=myint.sort((a,b)=> a-b)
  return sorting[-2]

}
let myint=[12,45,32,1,5]
console.log(mynumbers(myint))

//Write a function that takes an array of numbers as an argument 
//and returns the sum of all the numbers in the array.
function mynumbers(nums){
    let sum=0
    for (let i=0; i < nums.length; i++){
       sum+=nums[i]
    }
    console.log(sum)
}
let nums=[1,2,3,4,5,6]
mynumbers(nums)
//Write a function that takes an array of strings as an argument and returns a new array with all the strings converted to uppercase.
//Write a function that takes a number as an argument and returns true if the number is even and false if it is odd

    //Write a function that takes an array of numbers 
    //as an argument and returns the average of all the numbers in the array.
    




