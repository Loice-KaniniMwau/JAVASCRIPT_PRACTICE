// students records
var students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
  ];
function getage(students){
    for(let i=0;i <students.length;i++){
        if(students[i].age >20){
            console.log(students[i]);
        }

    }
}
getage(students)
// categories
var fruits = [
    { name: "Apple", color: "Red",category:"fruit" ,price:100},
    { name: "Banana", color: "Yellow",category:"fruit" ,price:50},
    { name: "Orange", color: "Orange",category:"fruit",price:60 },
    {name:"sukuma",color:"green",category:"vegetable",price:100},
    {name:"cabbage",color:"green",category:"vegetable",price:200}
  ];
 console.log(fruits.push({name:"terere",color:"green",category:"vegetable"}));
//  group by categories
function group_fruits(fruits){
    const grouped_fruits={}
    fruits.forEach((fruit)=>{
        const category=fruit.category
        if(!grouped_fruits[category]){
            grouped_fruits[category]=[]
        }
        grouped_fruits[category].push(fruit)

    })
    return grouped_fruits

    }
  console.log(group_fruits(fruits))
//sort by price
function sortby_price(fruits){
 let sorted= fruits.sort(function(a,b){
    return a.price -b.price
  })
  console.log(sorted);
}
sortby_price(fruits)

// finding an item with shared attributes
//eg books by a certain author
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
function getBooksByAuthor(books){
    var findby_author=books.find(function(item){
        return item.author==="Homer"
    })
    console.log(findby_author); 
  
}
getBooksByAuthor(books)

// 

  