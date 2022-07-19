// An abstract class cannot be instanciated, we can extend it
// And instanciate the class extending it

export abstract class Animal {
    constructor(protected name: string) {}

    move() {
        console.log('moviendo');
    }

    greeting() {
        return `Hello, my name is ${this.name}`
    }

    // We use protected to make children inherit methods and attributes
    // If it's private only the class has access
    protected doSomething() {
        console.log('do')
    }
}

export class Dog extends Animal {

    constructor(name: string, public owner: string) {
        super(name);
    }

    woof(times: number): void {
        for (let index = 0; index < times; index++) {
            console.log(`Woof! ${this.name}`);
        }
    }

    move() {
        // First, the children methods are executed, and then, the parents
        console.log('Moving')
        super.move();
    }
}

// Instance of dog that extends Animal
const dog = new Dog('Ramon', 'Andre');
