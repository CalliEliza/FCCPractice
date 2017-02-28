/**
 * Created by chewy on 2/13/17.
 */

// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


/*var str = ???;
permAlone(current position in original string, characters used already in original string, created string) {
    if (current string is finished) {
        print current string;
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str[i] has not been used) {
                put str[i] into the current position of new string;
                mark str[i] as used;
                permAlone(current position in original string, characters used already in original string, created string);
                remove str[i] as used because another branch in the tree for i + 1 will likely use it;
            }
        }
    }
}
permAlone(0, nothing used yet, empty new string (or array the same size as str));*/


function permAlone(currentPos, charUsed, str) {
    return str;
}

permAlone('aab');