/**
 * Created by chewy on 2/5/17.
 */


// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


// solution:
// 1. convert binary to decimal
// 2. find letter for decimal
// 3. create new string

function binaryAgent(str) {
    let str1 = str.split(" "); // converts string into array of strings
    const len = str1.length;
    // get decimal for each binary
    let deciArray = []; // will hold decimal values
    for (let i =0;i<len;++i) { // looping through original string
        let temp1 = str1[i].split(""); // split string into smaller array of strings
        //console.log(temp1);
        let convDeci = 0;
        let temp4 = temp1.reverse();
        for (let j =0;j<temp1.length;++j) { // will return decimal value for each binary code
            //console.log(temp1[j]);
            let temp2 = temp4[j];
            if (temp2 == 1) {
                let temp = Math.pow(2,j);
                //console.log(temp);
                convDeci += temp; // adds value to variable
            }
        }
        deciArray.push(convDeci);
        //console.log(deciArray);
    }
    // loop through decimal array and get letter value for each
    let ansString = '';
    deciArray.forEach(function(decimal) {
        let tempVar = String.fromCharCode(decimal);
        ansString += tempVar;
    });
    console.log(ansString);
    return ansString;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"