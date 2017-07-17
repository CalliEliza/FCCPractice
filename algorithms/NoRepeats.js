/**
 * Created by chewy on 2/13/17.
 */

// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.



function permAlone(str) {
    //regex
    var rx = /(.)\1+/g;

    //split --> array of char
    var ary = str.split('');
    var perm = [];
    var temp;

    //0 if str contains same char
    if (str.match(rx) !== null && str.match(rx)[0] === str) {
        return 0;
    }

    //fxn to switch variables
    function switchVars(idx1, idx2) {
        temp = ary[idx1];
        ary[idx1] = ary[idx2];
        ary[idx2] = temp;
    }

    //get permutations
    function getPerms(x) {
        if (x === 1) {
            perm.push(ary.join(''));
        } else {
            for (let i =0; i != x; ++i) {
                getPerms(x - 1);
                switchVars(x % 2 ? 0 : i, x - 1);
            }
        }
    }

    getPerms(ary.length);

}

permAlone('aab');
