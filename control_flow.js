//if statement -if hpour is btn 6am and 12pm-goodmorninh
//hour btn 12pm and 6am goodafternoon
hours(7)
function hours(thehour){
   
    if(thehour>=6&& hours <12){
        console.log("good morning")
    }
    else if(thehour>=12 && hours <6){
        console.log("good afternoon")
    }
    else{
        console.log("good evening")
    }
}
//for loop
//takes in three statements -(initial expression,the condition(the loop runs as long as the condition is true
//,increment expression (increment value of initial expression)),)

//
let mynumbers=[1,2,3,4,5,6,7]
function allnumbers(mynumbers){
for (let num=0;;num++){
    console.log(mynumbers[num])
    if(num<=5){
    console.log(mynumbers[num]*=8)}
    if(num===mynumbers.length-2){
        console.log(mynumbers[num]+=5)
    }
}
}
//print da da dee da ba daa 6times
for(let i=0;i<=6;i++){
    console.log("da da dee da ba dda")
}
//even numbers from 0-20

for (let even=0;even<=20;even+=2){
    if(even%2===0){
        console.log(even)
    }
}
//oddd numbers
for(let odd=1;odd<=20;odd+=2){
    console.log(odd)
}
//counting down//decreasing by 10
for(let decrease=100;decrease>=0;decrease-=10){
    console.log(decrease)
}
//
for(let countdown=25; countdown>=0;countdown-=5){
    console.log(countdown)
}

//looping over arrays
//the for loop starts at index 0 ,the condition that runs as long as its true,the oincrement or decrement 
//statement 
//an array -where you dont know the count -or the start or ed
//let i=0;i<array.length; i++- then console array[1]to get the items
let people=["scooby","velma","daphne",'shaggy',"fred"]
for(let i=0;i<people.length;i++){
    console.log(people[i].toUpperCase())
}
//nested for loops
//first 5elements multiplied by 8 //last 2 added by 5
let nums=[1,2,3,4,5,6,7,8,9]
for(let start=5;start>=0;start--){
   console.log(nums[start]*=8)
   for(let j=nums.length-1;j<=nums.length-2;j++){
    console.log(nums[j]+=5)
   }
}
console.log(nums)
//while loop-takes in a single condition
//if the condition is true the loop continues running
let count=0;
while(count<10){
    //increasing or decreasing the count after printing
    console.log(count)
    count++
}
//
// while used with the break keyword
//Write a while loop that prints out the numbers 1 to 10.

let i=1;
while(i<=10){

    console.log(i)
    i++
}
//Write a while loop that prints out the even numbers from 2 to 20.
let even=2
while(even<=20){
   
    console.log(even)
    even+=2
   
       
    }
//aprroach 2
let start=0
while(start<=20){
    start++
    if(start%2===0){
      
        console.log(start)
       
    }
}
//even numbers second approach
let aary=[21,25,39,204,55,76,97,18,29,10,11,12]
let starting=0;

while(starting<=aary.length){
    starting++
    if(aary[starting] % 2===0){
        console.log("even nums", aary[starting])
    }
}
//Write a while loop that calculates the sum of the first 100 positive integers.

//Write a while loop that takes a string as input from the user 
//and prints out the string in reverse order.
// let str=""
// let mystrings="loice"

// while(str<=mystrings){
//     console.log(sorted(mystrings))
//     mystrings.sorted((a,b)=>{
//         return a-b
       
//     }) 
// }


//nested for loops
//first 5elements multiplied by 8 //last 2 added by 5
let x=[1,2,3,4,5,6,7,8,9]
for(let start=0;start<=5;start++){
   x[start]*=8
     for(let j=x.length-1;j<x.length-2;j--){
      x[j]+=5
      
   }
   console.log(x)
}






