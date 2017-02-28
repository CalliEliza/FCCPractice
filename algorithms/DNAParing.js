/**
 * Created by callie on 9/11/16.
 */

function pairElement(str) {
    arrOfstr = str.split("");
    finalArr = [];
    for (var i =0;i<arrOfstr.length;++i) {
        if (arrOfstr[i] == "A") {
            finalArr.push(["A","T"]);
        } else if (arrOfstr[i] == "T") {
            finalArr.push(["T","A"]);
        } else  if (arrOfstr[i] == "G") {
            finalArr.push(["G","C"]);
        } else if (arrOfstr[i] == "C") {
            finalArr.push(["C","G"]);
        }
    }
    return finalArr;
}

console.log(pairElement("GCG"));