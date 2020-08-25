class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  //this is a method
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
/**
 * Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
 
 */

//this is call methods
console.log(surgeonCurry.name);
console.log(surgeonCurry.takeVacationDays(3));
console.log(surgeonCurry.remainingVacationDays);