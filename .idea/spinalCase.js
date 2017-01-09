/**
 * Created by chewy on 1/9/17.
 */

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    var spinalCase;
    if (str.indexOf(' ') != -1) {
        var lowerCase = str.toLowerCase();
        spinalCase = lowerCase.split(' ').join('-');
        console.log("final ans, with spaces "+spinalCase);
    } else if (str.indexOf(' ') == -1 && str.indexOf('_') == -1) {
        var middleStep = str.replace(/([A-Z])/g, '-$1');
        //console.log("middle step, no spaces "+middleStep);
        spinalCase = middleStep.toLowerCase();
        console.log("no spaces "+spinalCase);
    } else if (str.indexOf('_') != -1) {
        var midStep = str.replace(/_/g, '-');
        //console.log(midStep);
        spinalCase = midStep.toLowerCase()
        console.log("string with _ "+spinalCase);
    } else if (str.indexOf(' ') == -1 && str.indexOf('-') != -1) {
        console.log("I'm here.");
    }

    //console.log(lowerCase);
    //console.log(spinalCase);
    return spinalCase;
}

//spinalCase('This Is Spinal Tap');

spinalCase("This Is Spinal Tap"); //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //should return "all-the-small-things".