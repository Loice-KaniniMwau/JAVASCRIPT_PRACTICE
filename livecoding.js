
// //day two
// function check(input){
// let check =Array.isArray(input)
// console.log(check)
// }
// check(input={a:20,b:30,c:40})

// most occuring element
function findMostOccurringElement(arr) {
  let elementCounts = {};

  // Count the occurrences of each element in the array
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (elementCounts[element]) {
      elementCounts[element]++;
    } else {
      elementCounts[element] = 1;
    }
  }

  let maxOccurrences = 0;
  let mostOccurringElement = null;

  // Find the element with the maximum occurrences
  for (let element in elementCounts) {
    if (elementCounts[element] > maxOccurrences) {
      maxOccurrences = elementCounts[element];
      mostOccurringElement = element;
    }
  }

  return mostOccurringElement;
}

// Example usage
let array = ["mary", "you", "loice","loice", "loice", "loice", "loice", "me", "you"];
let mostOccurring = findMostOccurringElement(array);
console.log("Most occurring element:", mostOccurring);


// capitalizing the first letter in a string
function capitalize(letter){
  let split=letter.split("")
  for(let i=0;i<letter.length;i++){
    let capital=split[i].charAt(0).toUpperCase()+split.slice(1).join("")
    return capital
  }
}
console.log(capitalize("loice"))
function tittlecase(sentence){
  let new_sentence=sentence.split("").map(a=>a[0].toUpperCase()+a.slice(1).toLowerCase()).join("")
  console.log(new_sentence);
  
}
tittlecase("she went to the office")
//most ocuring 
function most_occuring(myarray){
  let empty={}
  for(let i=0;i<myarray.length;i++){
    let element=myarray[i]
    if(myarray[element]){
      myarray[element]++
    }else{
      myarray[element]=1
    }
  }
  let most=0;
  let max_element=null
  for(let element in empty){
    if(empty[element] > most){
     most=empty[element]
     max_element=element
    }

  }return max_element
}
console.log(most_occuring([1,2,3,4,5,6,7,8,8,8,8]));

    
// longest element
function longstring(words){
    let newword=""
    for (let i = 0; i < words.length;i++){
     
     if(words[i].length > newword.length){
        newword=words[i]
       
     }
     
     }return newword
     
    
    }
    

words=["loice","kanini","mary"]
console.log(longstring(words))