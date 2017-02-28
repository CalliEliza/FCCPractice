/**
 * Created by callie on 5/25/15.
 */
/**  Rövarspråket is not very complicated: you take an ordinary word and replace the consonants with the consonant doubled and with an "o" in between. So the consonant "b" is replaced by "bob", "r" is replaced with "ror", "s" is replaced with "sos", and so on. Vowels are left intact. It's made for Swedish, but it works just as well in English.
 Your task today is to write a program that can encode a string of text into Rövarspråket.**/

var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
var superSecret = function(string) {
    for (i=0; i<string.length; ++i) {
        for (j=0; j<vowels.length; ++j) {
            if (string.charAt(i) == /\w/ && string.charAt(i) !== vowels[i]) {
                var str = string.replace(/\w/, /\w/ + 'o' + /\w/);
            }
        }
    }
    return str;
};

console.log(superSecret('hello'));



















/*
Robber = {
    letters: 'bcdfghjklmnpqrstvwxz',
    encode: function (s) {
        return s.replace(new RegExp('[' + Robber.letters + ']', 'ig'), function (letter) {
            return letter + 'o' + letter.toLowerCase();
        });
    },
    decode: function (s) {
        return s.replace(new RegExp('([' + Robber.letters + '])o\\1', 'ig'), function (letters) {
            return letters[0];
        });
    }
}

//////
var encoded = message.replace(/([^aeiouåäöAEIOUYÅÄÖ\.\?!\s])/gi, function(match, p1){
    return p1 + "o" + p1.toLowerCase();
});*/
