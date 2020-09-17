class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

//________________________________________

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());