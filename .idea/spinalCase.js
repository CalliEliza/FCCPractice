/**
 * Created by chewy on 1/9/17.
 */

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    var spinalCase;
    if () {}
    var lowerCase = str.toLowerCase();
    //console.log(lowerCase);
    spinalCase = lowerCase.split(' ').join('-');
    console.log(spinalCase);
    return spinalCase;
}

spinalCase('This Is Spinal Tap');

spinalCase("This Is Spinal Tap"); //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //should return "all-the-small-things".