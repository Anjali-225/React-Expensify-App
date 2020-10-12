//arguements object -no longer bound with arrow functions 
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
const user = {
    name :'Anjali',
    cities: ['Woodmead', 'Rivonia', 'Secunda'],
    printPlacesLived() {
        //const cityMessages = this.cities.map((city) => {
            return this.cities.map((city) => this.name +' has live in '+ city);
            //return city + '!';
            //return this.name +' has live in '+ city;
        //);
        //return cityMessages;
        /*
        //const that = this;
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers : [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }   
    // Numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
};
console.log(multiplier.multiply());                                                                                                                               