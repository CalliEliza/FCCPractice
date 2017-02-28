/**
 * Created by callie on 9/4/16.
 */
var num = 2;
var num1 = 3;
var num2 = 4;
var num3 = 5;
var num4 = 9;
var num5 = 12;
var num6 = 16;
var num7 = 29;
var num8 = 44;
var num9 = 45;

function convertToRoman(num) {
   var digits = String(num).split("");
    var key = ["I","II","III","IV","V","VI","VII",'VIII',"IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "C","CC","CCC","CD","D","DCC","DCCC","CM","M"];
    if (num>1000) {
        while (num>0) {

        }
    }
}

function test() {
    var ans = convertToRoman(num);
    var ans1 = convertToRoman(num1);
    var ans2 = convertToRoman(num2);
    var ans3 = convertToRoman(num3);
    var ans4 = convertToRoman(num4);
    var ans5 = convertToRoman(num5);
    var ans6 = convertToRoman(num6);
    var ans7 = convertToRoman(num7);
    var ans8 = convertToRoman(num8);
    var ans9 = convertToRoman(num9);
    if (ans != "II") {
        console.log("INCORRECT: got "+ans+" not II");
    }
    if (ans1 != "III") {
        console.log("INCORRECT: got "+ans1+" not III");
    }
    if (ans2!="IV") {
        console.log("INCORRECT: got "+ans2+" not IV");
    }
    if (ans3!="V") {
        console.log("INCORRECT: got "+ans3+" not V");
    }
    if (ans4!="IX") {
        console.log("INCORRECT: got "+ans4+" not IX");
    }
    if (ans5!="XII") {
        console.log("INCORRECT: got "+ans5+" not XII");
    }
    if (ans6!="XVI") {
        console.log("INCORRECT: got "+ans6+" not XVI");
    }
    if (ans7!="XXIX") {
        console.log("INCORRECT: got "+ans7+" not XXIX");
    }
    if (ans8!="XLIV") {
        console.log("INCORRECT: got "+ans8+" not XLIV");
    }
    if (ans9!="XLV") {
        console.log("INCORRECT: got "+ans9+" not XLV");
    }
}

test();

/**
 function convertToRoman(num) {
    var oneToNine = ["I","II","III","IV","V","VI","VII",'VIII',"IX"];
    var byTens = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    var byHundreds = ["C","CC","CCC","CD","D","DCC","DCCC","CM"];
    if (num <10) {
        return oneToNine[num-1];
    } else if (num >=10 && num<20) {
        var rem = num % 10;
        return byTens[0] + oneToNine[rem-1];
    } else if (num>=20 &&num<30) {
        var rem1 = num % 20;
        return byTens[1]+oneToNine[rem1-1];
    } else if (num>=40 &&num<50) {
        var rem2 = num % 40;
        return byTens[3] + oneToNine[rem2 - 1];
    } else if (num>=60 &&num<70) {
        var rem3 = num % 60;
        return byTens[5] + oneToNine[rem3 - 1];
    } else if (num>=80 &&num<90) {
        var rem4 = num % 80;
        return byTens[7] + oneToNine[rem4 - 1];
    } else if (num>=90 &&num<100) {
        var rem5 = num % 90;
        return byTens[8] + oneToNine[rem5 - 1];
    }
}
 **/