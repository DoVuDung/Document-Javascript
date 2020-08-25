const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

//reassign the _energyLevel property to 'high'
robot._energyLevel = 'high';
//call method to find out
robot.recharge();


