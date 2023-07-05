// asynchronous functions
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
// call back functions
function add(post,callback){
setTimeout(()=>{
students.push(post)
callback()
},2000)
}
add({
    names:"macian",class:"anitab"
},getclass)

// promises
function promis(mypost){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            students.push(mypost)
            
            let err=false
            if(!err){
                resolve()
            }
            else{
                reject("error ocurred");
            }

        },3000)
    })
}
promis({  names:"kanini",class:"anitab"}).then(getclass).catch(err=>console.log(err))


// set time out 

let mypormises= new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"hello")

    }
)
console.log(mypormises);



// using promise.all


