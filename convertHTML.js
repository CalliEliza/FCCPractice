/**
 * Created by chewy on 1/26/17.
 */


//  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    var list = str.split(" "); // turn string into array
    var and = new RegExp("&","g");
    var leftArrow = new RegExp("<","g");
    var rightArrow = new RegExp(">","g");
    var doubleQuotes = new RegExp('"',"g");
    var apostrophe = new RegExp("'","g");
    for (var i =0;i<list.length;++i) {
        var temp = list[i];
        if (list[i] == "&") {
            list[i] = "&amp;";
        }
    }
    var newStrng = list.join(" ");
    var check1 = newStrng.replace(doubleQuotes, "&quot;");
    var check3 = check1.replace(leftArrow, "&lt;");
    var check4 = check3.replace(rightArrow, "&gt;");
    var check5 = check4.replace(apostrophe,"&apos;");
    console.log(check5);
    //console.log(replaceApostrophe);
    return check5;
}

convertHTML("Dolce & Gabbana");  //should return Dolce &​amp; Gabbana.

//convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") //should return Shindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.
//convertHTML("abc") //should return abc