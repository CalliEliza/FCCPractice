/**
 * Created by callie on 9/12/16.
 */


function myReplace(str, before, after) {
    console.log(before.charAt(0));
    if (before.charAt(0)== before.charAt(0).toUpperCase()) {
        origc = after.charAt(0);
        newc = after.charAt(0).toUpperCase();
        aftern = after.replace(origc, newc);
        newstr = str.replace(before, aftern);
    } else {
        newstr = str.replace(before, after);
    }
    return newstr;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));