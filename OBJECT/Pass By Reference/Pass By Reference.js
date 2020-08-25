let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
/**
 * tao function: nhan object va tham so moi
 * Ben duoi la cu phap:
 * let functionName = objectParam => {
  objectParam['Property Name'] = 'New Property Value';
};
 */
//day cung tao ra ham nhe wtf
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}
/**
 * duoi day cung tuong tu tao ra mot doi tuong nhu tren
 */
//day la tao ra ham nhe cac ban wtf
let remotelyDisable = obj => {
  obj.disabled = true;
}
// greenEnergy co the goi ra duoc toi tuong la spaceship
//cho nao con goi la goi
greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)