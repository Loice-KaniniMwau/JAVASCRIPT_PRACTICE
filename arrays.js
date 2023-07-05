//data structures that allow us to store multiple values 
let lottonnumbers=[2,5,7,8,1,8]
console.log(lottonnumbers)
//
let leaderboard=["Harry","Luna","Hermione","Bellatrix"]
leaderboard[1]="Luna"
console.log(leaderboard)
//
let planets=["the moon","Venus","Earth","Mars","Jupiter"]
console.log(planets.shift())
console.log(planets.push("Saturn"))
console.log(planets.unshift("Mercury"))
console.log(planets)
//nested arrays
let airplaneseats=[["ruth","antony","stevie"],["Amelai","pedro","maya"],["xavier","ananya","luis"]
,["luke",null,"deniz"],["rin","sakura","francisco"]]
airplaneseats[3][1]="Hugo"
console.log(airplaneseats)
//array callback  methods-require you to pass a function inot them
//for each ,map ,filter,arrow function,reduce
//passing a function to another function
// for each -
const nums=[1,2,3,4,5,7,8,9]

nums.forEach(function(el){
    console.log(el)
})
//for of
for(let el of nums){
    console.log(el)
}
//even numbers
nums.forEach(function(even){
    if(even %2 ===0){
        console.log("even numbers", even)
    }
})
//movies 
const movies=[{title:"black list",year:2012,rating:9/10},{title:"witches",year:1998,rating:2/10},
{title:"hand-made tale",year
:1439,rating:4/10}]
movies.forEach(function(movie){
    console.log(movie.rating)

    
    
})

