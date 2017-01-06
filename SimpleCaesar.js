
function rot13(str) { // LBH QVQ VG!
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabetKey = alphabet.substring(13, 26) + alphabet.substring(0, 12);
    var newString = '';
    for (var i = 0; i < str.length; ++i) {
        var currCh = str.charAt(i);
        var idx = alphabet.indexOf(currCh);
        var newChar;
        if (idx != -1) {
            newChar = alphabetKey.charAt(idx);
            newString += newChar;
        }
        else if (idx = " ") {
            newChar = " ";
            newString+= newChar;
        }
    }
    var punctuation = str.lastIndexOf(str);
    newString += str.charAt(punctuation);
    return newString;
}

// Change the inputs below to test
console.log(rot13("SERR YBIR?"));