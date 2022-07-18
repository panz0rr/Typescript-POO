// Creating a simple class.

export class MyDate {

    constructor(
        public year: number = 1993, 
        private _month: number = 7, 
        private _day: number = 9
        ) 
        {}

    // methods

    /**
     * @returns a formatted string with the current date.
     */

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${day}/${month}/${this.year}`;
    }

    /**
     * A private helper to format a number with a 0. Ex: 1 => 01
     * @param value the number to evaluate
     * @returns a string with a 0 it it's less than 10
     */
    private addPadding(value: number) {
        if (value < 10) {
            return `0${value}`
        }

        return `${value}`;
    }

    /**
     * 
     * @param amount the quantity we want to add
     * @param type the attribute which we will add the amount
     */

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') this._day += amount ;

        if (type === 'months') this._month += amount;

        if (type === 'years') this.year += amount;
    }

    /**
     * 
     * With this getter we can read an attribute without the possibility
     * of directly changing because it's private.
     */
    get day() {
        return this._day;
    }

    /**
     * Getter that returns whether a year is leap or not
     */
    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }

    get month() {
       return this._month;
    }

    /**
     * A way to make a private attribute editable
     * but with logical rules that won't break them
     */
    set month(newValue: number) {
        if (newValue >= 1 && newValue <= 12) {
            this._month = newValue;
        } else {
            throw new Error('month out of range');
        }
    }
}

const defaultDate = new MyDate();

// Will print the default date declared in the constructor
console.log('() =>', defaultDate.printFormat());

const dateWithYear = new MyDate(2024);

// Will print the default date declared in the constructor with the
// passed year
console.log('(2024) =>', dateWithYear.printFormat());

const date = new MyDate(2022, 1, 2);

console.log(date.printFormat());

date.add(3, 'days');

// Getters have a property behavior
console.log(date.day);

// We can't modify this value as it's private:
//date.day = 1;

// date with plus 3 days after using add method
console.log(date.printFormat());

console.log(date.isLeapYear);

console.log(dateWithYear.isLeapYear);
// this will throw an error as 40 is not a valid month
// can be handled witha  try catch.
/**
 *  date.month = 40;
    console.log('', date.month);
 */
