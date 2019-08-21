/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "This" refers to the window object when we do not state specifically what "this" refers to.

* 2. With Implicit Binding, when a method is invoked "this" refers to the object within which that method was used in.

* 3. "This" in new binding refers to the object that is created from a constructor object.

* 4. With Explicit binding, "this" refers to whatever context we choose to use it. We use keywords such as call, apply and bind to determine what exactly "this" refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayAge() {
    return this;
  }
  sayAge();

// Principle 2

// code example for Implicit Binding

const me = {
    firstName: 'David',
    lastName: 'Kuseh',
    speak: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
} 
me.speak();

// Principle 3

// code example for New Binding
function FullName(fName,lName) {
    this.firstName = fName;
    this.lastName = lName;
}

FullName.prototype.logFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`)
}

const fullName = new FullName('David','Kuseh');
fullName.logFullName();

// Principle 4

// code example for Explicit Binding

function sayName() {
    console.log(this.firstName + ' ' + this.lastName)
}

const anotherFullName = {
    firstName: 'David',
    lastName: 'Kuseh'
};
sayName.call(anotherFullName);