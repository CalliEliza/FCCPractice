/**
 * Created by chewy on 1/6/17.
 */

/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum
 of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 **/


function sumFibs(num) {
    var oddSum =2;
    var Var1 =1;
    var Var2 = 2;
    var nextTerm = 0;
    while (nextTerm<num) {
        console.log("Var1: "+Var1+" and Var2: "+Var2);
        nextTerm = Var1+Var2;
        console.log("nextTerm: "+nextTerm);
        Var1=Var2;
        if (nextTerm % 2 !== 0 && nextTerm<=num) {
            oddSum+=nextTerm;
        }
        Var2=nextTerm;
    }
    return oddSum;
}

console.log("Sum of all odd Fibb numbers: "+sumFibs(10));
console.log(sumFibs(75025)); // 135721.