
class Person { 
    constructor(name = 'Anonymous', age =0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person { 
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //We have over written the parent behaviour
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            //description = description + ``;
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

//Challenge  
// Traveler -> Person 
//Add support for homelocation
//overwite getGreeting 
// have if condition 
// Hi. i am Name. I am visiting from Location
// Hi. i am Name.
// then TEST

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

//const me = new Student('Anjali', 18, 'Computer Science');
//console.log(me.getDescription());

const me = new Traveler('Anjali', 18, 'Rivonia');
console.log(me.getGreeting());

//const other = new Student();
//console.log(other.getDescription());

const other = new Traveler();
console.log(other.getGreeting());