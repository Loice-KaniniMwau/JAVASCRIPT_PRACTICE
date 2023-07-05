// function doSomething(callback){
//     setTimeout (function(){
//         var skills = ['HTML', 'CSS', 'JS'];
//         callback(skills)
//     },2000)
// }
// function callback(skills){
//     if(skills){
//         console.log(`I love ${skills}`);
//     }
//     else{
//         console.log("skills not found");
//     }
// }
// doSomething(callback)
// using a function declaration
const doSomething=callback=>{
    setTimeout(function(){
        var skills=["HTML","JavaScript","Css"]
        callback("it did not go well",skills,"python","django")
    },2000) 
}
// using spread operator to add new skills
callback=(err,result,...newskill)=>{

if(err){
    console.log(err);
}
else{
    if(!Array.isArray(result)){
        result=[]
    }
    result.push(...newskill)
    console.log(result);
}
}

doSomething(callback)

// promises
const promise=new Promise((resolve,reject)=>{
    var names=["loice","kanini","mary"]
    if(names.length>1){
        resolve(names)
    }
    else{
        reject("names are less than 1")
    }

})
.then(result=>console.log(result))
.catch(error=>console.log(error))
// error message
const mypromise=new Promise((resolve,reject)=>{
var lessons=["python","kotlin"]
if(lessons.includes("Javascript")){
    resolve("i study js as well")
}
else{
    reject("I do not study ja")
}
}).then(result=>console.log(result))
.catch(error=>console.log(error))

// async and await .an elegant way of writing asynchronous functions
// const square=async function(n){
// return n*n
// }
// const value=await square(4)
// console.log(value);

// 
// const mypromisse =new Promise((resolve,reject)=>{
// const term1=2
// const term2=2
// const expression=term1+term2
// const answer=5
// const expressionIsCorrect=expression===answer
// if(expressionIsCorrect){
//     resolve("promise was fulfilled")
// }
// else{
//     reject("rejected")
// }
// }).then(message=>console.log(message))
// .catch(error=>console.log(error))

const mypromisse = new Promise((resolve, reject) => {
    const term1 = 2;
    const term2 = 2;
    const expression = term1 + term2;
    const answer = 4;
    const expressionIsCorrect = expression === answer;
  
    // 2 + 2 = 4, and 4 = 4, so this is true!
    if (expressionIsCorrect) {
      resolve('The promise was fulfilled!');
    } else {
      reject({
        errorType: 'ArithmeticError',
        message: "The expression didn't evaluate correctly.",
        originalExpression: `${term1} + ${term2} === ${answer}`,
      });
    }
  })
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((err) => {
    console.log(
      `${err.errorType}: ${err.message} \nOriginal Expression: ${err.originalExpression}`
    );
  })
  .finally((message) => {
    console.log('Operations finished');
  });
// 
const square = async(n)=> {
    return n * n
}
// th await keyowrd should be inside an asynchronous function
// not outside
async function square2(){
    const response=await square(2)
    console.log(response);

}
square2()