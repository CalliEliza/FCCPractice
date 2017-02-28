/**
 * Created by callie on 9/16/16.
 */


function fearNotLetter(str) {
    tempChar3 = 0;
    answer = undefined;
    for (var i =0;i<str.length;++i) {
        tempChar = str.charCodeAt(i);
        if (i+1<str.length) {
            tempChar2 = str.charCodeAt(i+1);
            if (tempChar2-tempChar!=1) {
                tempChar3 = tempChar+1;
                answer = String.fromCharCode(tempChar3);
            }
        }
    }
    return answer;
}

//console.log(fearNotLetter("abce")); // return d
//console.log(fearNotLetter("abcdefghjklmno")); // return i
//console.log(fearNotLetter("bcd")); // return undefined
console.log(fearNotLetter("yz")); // return undefined
