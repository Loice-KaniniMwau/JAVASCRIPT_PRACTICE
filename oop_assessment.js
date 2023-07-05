class Ankara{
    constructor(mood,temperature){
        this.mood=mood
        this.temperature=temperature
    }
    get_pattern(){
        const mood_neutral=5
        const temperature=25
        if(this.temperature>temperature && this.mood>mood_neutral){
            console.log("wear bright and more patterned ankara ");
        }
        else if(this.temperature<temperature && this.mood<mood_neutral){
            console.log("wear dull and less patterned");
        }
        else{
            console.log("mood and temperature neutral ,not expecting change in design");
        }
    }
}
let ankara1=new Ankara(5,25)
ankara1.get_pattern();
// movie management -a producer in the bollywood movie project 
class Movie_management{
    constructor(budget,schedule){
    this.budget=budget
    this.schedule=schedule
    }
    getBudget(totalbudget){
        this.totalbudget=totalbudget
        let totalPrice = this.budget.reduce((total, item) => total +item[Object.keys(item)[0]], 0);
        if(totalPrice>totalbudget){
            console.log("budget excceeds"); 
        }
        else{
         console.log(totalPrice) ;
        }   
    }
    getschedule(numberof_scenes){
        // let numberof_days=Object.values(this.schedule).length/numberof_scenes
        let numberof_days=numberof_scenes/Object.values(this.schedule).length
        return numberof_days
    }
}
let movie1=new Movie_management([{transport:300000},{accommodation:300000},{
    food:300000
}],[{accommodation_sourcing:"monday"},{shooting_day:"tuesday"}])
movie1.getBudget(800000)
// console.log(movie1.getBudget(50000000))
console.log(movie1.getschedule(20))

// wildlife
class Wildlife_migration{
    constructor(animal,riverlevels,predatorlevels,weather_patterns){
        this.animal=animal
        this.riverlevels=riverlevels
        this.predatorlevels=predatorlevels
        this.weather_patterns=weather_patterns
    }
    predict_movement(){
       if(this.riverlevels==="low" && this.predatorlevels==="low" && this.weather_patterns==="sunny"){
        console.log(`safe for ${this.animal} to migrate`);
       }
       else{
        console.log(`not safe for ${this.animal} to migrate`);
       }
    }
}

// let migration=new Wildlife_migration(["zebra","wildbeast"],"low","low","sunny")
let migration=new Wildlife_migration("zebra","low","low","sunny")

migration.predict_movement()
// take two for wildlife

class Animal {
    constructor(species, currentLocation) {
      this.species = species;
      this.currentLocation = currentLocation;
    }
  
    predictMovement(weatherPatterns, riverLevels, predatorLocations) {
      let movement = "Stay";
      const currentWeather=weatherPatterns[weatherPatterns.length - 1];
      if (currentWeather.temperature > 25 && currentWeather.rainfall < 50) {
        movement = "Move to find water and food";
      }
      const currentRiverLevel = riverLevels[riverLevels.length - 1]; // Assuming the latest river level is at the end of the array
      if (currentRiverLevel > 2.5) {
        movement = "Cross the river";
      }
      if (predatorLocations.includes(this.currentLocation)) {
        movement = "Move away from predators";
      }
      return movement;
    }
  }
  const animal = new Animal("Wildebeest", "Location A");
  const weatherPatterns = [
    { temperature: 30, rainfall: 20, windSpeed: 10 },
    { temperature: 28, rainfall: 25, windSpeed: 12 },

  ];
  
  // Define river levels
  const riverLevels = [
    3.2,
    2.8,
  ];
  const predatorLocations = [
    "Location C",
    "Location B",
  
  ];
  const predictedMovement = animal.predictMovement(weatherPatterns, riverLevels, predatorLocations);
  
  console.log("Predicted Movement:", predictedMovement);


  // ***********************Magical Baobab********************************
//magical baobab ***********************************
class Baobab {
  constructor(fruit, season, power, effects) {
    this.fruit = fruit;
    this.season = season;
    this.power = power;
    this.effects = effects;
  }
}
let fruits = [];
let firstfruits = new Baobab("baobab fruit", "dry", "energetic", "strength");
console.log(fruits.push(firstfruits));
class Seasons {
  constructor(season) {
    this.season = season;
  }
  predictFruit() {
    let fruit = fruits.filter((item) => item.season === this.season);
    return fruit;
  }
}
let drySeason = new Seasons("dry");
console.log(drySeason.predictFruit());
// movie cast question

 


