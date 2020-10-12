var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet ='Jen';
nameLet ='Juliet';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);
/*
function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petname);*/

//Block Scoping

const fullName = 'Anjali Morar';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName)
