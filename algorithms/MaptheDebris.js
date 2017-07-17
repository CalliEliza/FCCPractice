

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

  //  The values should be rounded to the nearest whole number. The body being orbited is Earth.

  //  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// formula needed: T = 2(3.14)(squareRoot((earthRadius + avAlt)^3)/GM)


function orbitalPeriod(arr) {

    console.log(arr.forEach(function(item) {
        console.log(item.keys());
    }));
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const twoXpie = 2*Math.PI;

    let avgAltitude = 0;

    //get array of object values
    let valueList = arr.values();

    //check array for number
    //isNaN returns false if value is a number
    valueList.forEach(function(value) {
        if (isNaN(value) == false) {
            avgAltitude = value;  //gets the avgAlt out of object
        }
    })

    //get orbital period
    function orbitalPeriod() {
        let earthRAvgA = earthRadius + avgAltitude;
        let raisedThird = Math.pow(earthRAvgA, 3);
        let divideByGM = raisedThird / GM;
        let squareRoot = Math.sqrt(divideByGM);
        let ans = Math.round(twoXpie * squareRoot);
        // add orbital period to obj, remove avgAlt
        arr[1].avgAlt = ans;
        return ans;
    }
    //runs fxn to get orbital period
    console.log(orbitalPeriod());

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);