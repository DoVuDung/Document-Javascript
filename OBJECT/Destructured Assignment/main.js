const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
//chu y tai day, no co nghia la tach cac doi tuong long nhau thanh cac bien rieng cho de su dung
const {functionality} = robot;
functionality.beep();
//

