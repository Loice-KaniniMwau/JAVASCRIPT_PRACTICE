//functions inside other functions
let myname="mary"
function hello(myname,identity){
console.log(`hello ${myname}`)
identity()
}
function me(){
    console.log(`hello there ${myname}`);
}
hello("loice",me)

function addition(nums,callback){
    // console.log(nums);
    callback(nums)
}
function mynums(nums){
    console.log(nums+10); 
}

addition(12,mynums)

//settimeout 
setTimeout(()=>{
    console.log("hello");
},3000)

//nested settimeout
setTimeout(()=>{
    console.log("hello");
    ;setTimeout(()=>{
        console.log("hello mary");
    },1000);setTimeout(()=>{
        console.log("me");
    },3000)
},5000)

//promis
let message=true
const mypromise=new Promise((resolve, reject) => {
    if(message){
        resolve("hello there")
    }
    else{
        reject("fail")
    }
})
    console.log(mypromise);
    // a promise is declared using the new keyword followed by promise
// it takes two call back functions resolve and reject-if the promise is a success
// the resolve message is consoled ..if not the reject method is consoled
const dopromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let skills=["html","javascript","css"]
        if(skills.length >0){
            resolve(skills)
        }
        else{
            reject()
        }

    },2000)
}).then(result=>console.log(result)).catch(error=>console.log(error))
// in an instance where the promise fails ..the resolvce message is consoled
let myskills=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let skills=["javascript","css","html"]
        if(skills.includes("Node")){
            resolve("full stack developer")
        }
        else{
            reject("something wrong happened")
        }
    },5000)
   
}).then(result=>{console.log(result)})
.catch(error=>{console.log(error)})

// async and await
// a better way of handling promises-using async infront of a function creates a 
// promise and to access that promise we the await keyword
const square = async function (n) {
    return n * n
  }
  
  square(2)
const promise=await square(2)
console.log(promise);
// more ********************on async and await
const students=[{
    names:"loice",class:"hopper"
},{
    names:"mary",class:'adalab'
}]
function getclass(){
setTimeout(()=>{
    classes=[]
    students.forEach((student)=>{
        classes.push(student.class)
      
    })
    console.log(classes)
    
},1000)

}
getclass()

function add(post,callback){
setTimeout(()=>{
students.push(post)
callback()
},2000)
}
add({
    names:"macian",class:"anitab"
},getclass)
// asynch and await
async function asynch(){
    await add({
        names:"macian",class:"anitab"
    });
    getclass()
} 


