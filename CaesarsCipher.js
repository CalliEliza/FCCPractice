/**
 * Created by callie on 1/3/16.
 */

// main function
function rot13(str) { // LBH QVQ VG!
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabetKey = alphabet.substring(13, 26) + alphabet.substring(0, 13);
    var newStr = "";
    for (var i = 0; i < str.length; ++i) {
        var currCh = str.charAt(i);
        var idx = alphabet.indexOf(currCh);
        if (idx != -1) {
            var newChar = alphabetKey.charAt(idx);
            newStr += newChar;
        }
        else if (currCh == '?' || currCh == "." || currCh == "!" || currCh == " ") {
            newStr += currCh;
        }
    }
        return newStr;
    }

// Change the inputs below to test
console.log(rot13("LBH QVQ VG!")); // YOU DID IT!
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); //should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); //should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."