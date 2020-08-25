const robot = {
  model:'1E78V2',
  energyLevel:100,
  //add method
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`

  }
};
//log the result of calling the method on the function to the console
console.log(robot.provideInfo());