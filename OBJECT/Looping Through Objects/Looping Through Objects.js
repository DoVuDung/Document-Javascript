let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
 /* console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)*/
 console.log(`${crewMember}:${spaceship.crew[crewMember].name}`)};
 /**
  * vấn đề chỗ này là for in quá đơn giản đâm ra ae chúng tôi hơi ngu
  * vấn đề 2 là việc truy cập object trong object chưa quen cần ôn lại
  * vấn đề 3 là ngu cmn !!!!
  */
 for(let crewMember in spaceship.crew){
   console.log(`${crewMember}:${spaceship.crew[crewMember].degree}`)
 };
