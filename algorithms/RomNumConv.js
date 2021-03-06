// Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
     var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
     var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
     var len = number.length;
     var ans = '';
     for (var i =0;i<len;++i) {
         while (num%number[i] < num) {
             ans += roman[i];
             num -= number[i];
         }
     }

    return ans;
}

console.log(convertToRoman(36));

//console.log(convertToRoman(3)); //should return "III".
//console.log(convertToRoman(4)); //should return "IV".
//console.log(convertToRoman(5)); //should return "V".
//console.log(convertToRoman(9)); //should return "IX".
//console.log(convertToRoman(12)); //should return "XII".
//console.log(convertToRoman(16)); //should return "XVI".
//console.log(convertToRoman(29)); //should return "XXIX".
//console.log(convertToRoman(44)); //should return "XLIV".
//console.log(convertToRoman(45)); //should return "XLV"
//console.log(convertToRoman(68)); //should return "LXVIII"
//console.log(convertToRoman(83)); //should return "LXXXIII"
//console.log(convertToRoman(97)); //should return "XCVII"
//console.log(convertToRoman(99)); //should return "XCIX"
//console.log(convertToRoman(500)); //should return "D"
//console.log(convertToRoman(501)); //should return "DI"
//console.log(convertToRoman(649)); //should return "DCXLIX"
//console.log(convertToRoman(798)); //should return "DCCXCVIII"
//console.log(convertToRoman(891)); //should return "DCCCXCI"
//console.log(convertToRoman(1000)); //should return "M"
//console.log(convertToRoman(1004)); //should return "MIV"
//console.log(convertToRoman(1006)); //should return "MVI"
//console.log(convertToRoman(1023)); //should return "MXXIII"
//console.log(convertToRoman(2014)); //should return "MMXIV"
//console.log(convertToRoman(3999)); //should return "MMMCMXCIX"