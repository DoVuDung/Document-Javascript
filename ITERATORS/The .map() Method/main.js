//khai bao mang
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//Tao mot mang moi, lay chu cai dau trong mang animals => tao ra tu moi HelloWorld
// Create the secretMessage array below
// tao ra bien co ten secretMessage, co nhiem vu la loc qua mang, map co chuc nang la loc qa mang
const secretMessage = animals.map(animal => animal[0]);
//animal => animal[0] : lay ki tu dau tien
console.log(secretMessage.join(''));
//secertMessage.join: nhom cac chu vua loc ra tu mang lai voi nhau

// tao ra mot mang bigNumbers voi cac so 
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
//map() se lay tung phan tu trong mang, sau do se chia cho (by) 100
// tao ra mot bien co ten la smallNumber
/**
 * smallNumber co chuc nang la noi luu tru(stored) value cua bigNumber
 * map() tuong tu nhu trong truong hop nay
 */
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)