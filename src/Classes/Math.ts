export class Math {
    static PI = 3.14;
    // We can only read this and not edit this
    static readonly zero = 0;

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item);
    }
}

//const math = new Math();
//math.PI;

// When something its static we can access directly from the class
// without creating an instance
Math.PI;
console.log('max', Math.max(1, 2, 3));
const numbers = [-1, -2, -3333, -43];
console.log(...numbers);
console.log('max', Math.max(...numbers));