
function translatePigLatin(str) {
    ay = "ay";
    var vowels = ["a", "e", "i", "o", "u"];
    firstChar = str.charAt(0);
    console.log(firstChar);
    secondChar = str.charAt(1);
    console.log(secondChar);
    for (var i =0;i<vowels.length;++i) {
        if (firstChar.toLowerCase()==vowels[i]) {
            wayStr = str.concat("way");
            console.log(wayStr);
            return wayStr;
        }
    }
    for (var j =0;j<vowels.length;++j) {
        if (firstChar.toLowerCase()!=vowels[j]) {
            if (secondChar.toLowerCase()==vowels[j]) {
                strRemoveFirst = str.replace(firstChar,'');
                pigStr = strRemoveFirst.concat(firstChar).concat(ay);
                console.log(pigStr);
                return pigStr;
            } else if (secondChar.toLowerCase()!=vowels[j]) {
                constCluster = firstChar.concat(secondChar);
                console.log(constCluster);
                strRemoveSec = str.replace(constCluster, '');
                console.log(strRemoveSec.concat(constCluster).concat(ay));
                return pigS = strRemoveSec.concat(constCluster).concat(ay);
            }
        }
    }
}

console.log(translatePigLatin("california"));