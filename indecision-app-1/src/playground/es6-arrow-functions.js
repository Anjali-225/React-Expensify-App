//normal es5 function with a name
function squares(x) {
    return x * x;
};
console.log(squares(5));

//declaring the function to a const
const square = function (x){
    return x * x;
};
console.log(square(8));

//Using arrow funtions
const squareArrow = (x) => x * x;

console.log(squareArrow(9))

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike" 
// Create regular arrow function
// Create arrow function using shorthand syntax

// 1.
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Anjali Morar'));

// 2. 
const getFirstName1 = fullName1 => fullName1.split(' ')[0];
console.log(getFirstName1('Anjali Morar'));  