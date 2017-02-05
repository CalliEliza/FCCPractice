/**
 * Created by chewy on 2/5/17.
 */


// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


// solution:
// 1. turn string into an array of string
// 2. convert each unicode to char code
// 3. get corresponding letter for each code.

function binaryAgent(str) {
    let str1 = str.split(" ");
    const len = str1.length;
    //console.log(str1);
    for (let i =0;i<len;++i) {
        let temp = str1[i];
        //console.log(str1[i]);
    }
    return str1;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"