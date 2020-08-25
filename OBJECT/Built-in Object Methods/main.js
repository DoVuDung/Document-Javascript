//luu y bai nay
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
console.log('+ Object.keys\n');
const robotKeys = Object.keys(robot);


console.log(robotKeys);

// Declare robotEntries below this line:
console.log('+ Object.entries\n');
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
console.log('+ Object.assign\n');
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});

console.log(newRobot);
