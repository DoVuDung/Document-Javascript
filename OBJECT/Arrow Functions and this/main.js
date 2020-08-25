const robot = {
  energyLevel: 100,
  checkEnergy: function()  {//To notice
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
/**
 * You can use the ES6 shorthand
 const goat = {
  name: 'Billy',
  color: 'biege',
  giveDetails(){
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}
 * The longhand format:
 const goat = {
  name: 'Billy',
  color: 'biege',
  giveDetails: function() {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}
 */