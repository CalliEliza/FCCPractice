/**
 * Created by chewy on 3/7/17.
 */


let Person = ( function(firstAndLast) {
    //splits name up into an array
    let splitName = firstAndLast.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    let fullName = firstName+" "+lastName;
    //getter methods
    this.getFullName = () => {
        console.log(fullName);
        return fullName;
    },
    this.getFirstName = () => {
        console.log(firstName);
        return firstName;
    },
    this.getLastName = () => {
        console.log(lastName);
        return lastName;
    },
    //setter methods
    this.setFirstName = (f) => {
        firstName = f;
        console.log(firstName);
        return firstName;
    },
    this.setLastName = (l) => {
        lastName = l;
        console.log(lastName);
        return lastName;
    },
    this.setFullName = (full) => {
        let temp = full.split(" ");
        firstName = temp[0];
        lastName = temp[1];
        let fName = firstName+" "+lastName;
        console.log(fName);
        return fName;
    }
});

let bob = new Person('Bob Ross');

bob.setFirstName('Haskell');
bob.getFullName();
console.log(Object.keys(bob).length);