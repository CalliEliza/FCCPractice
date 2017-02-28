/**
 * Created by callie on 1/2/16.
 */
var count = 0;

function cc(card) {
    // Only change code below this line
    if (card >= 2 && card <= 6 ) {
        count += 1;
    } else if (card === 10 || card === 'J' || card === "Q" || card === "K" || card === "A") {
        count -= 1;
    }

    if (count > 0) {
        return "" +count+ " Bet";
    } else if (count <= 0) {
        return "" +count+ " Hold";
    }


    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
//cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(cc(2));