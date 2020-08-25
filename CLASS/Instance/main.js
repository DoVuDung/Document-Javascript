class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
// loi tiep theo cua toi la thieu thang `new` nhe, can than toi oi
//this is Instance, ok ?
const surgeonCurry =new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');