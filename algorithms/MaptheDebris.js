

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

  //  The values should be rounded to the nearest whole number. The body being orbited is Earth.

  //  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// formula needed: T = 2(3.14)(squareRoot((earthRadius + avAlt)^3)/GM)


function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const twoXpie = 2*Math.PI;
    let newArray = [];

    let avgAltitude = 0;


    //get orbital period, sets it in obj
    let getOrbitalPer = function (obj) {
        let earthRAvgA = earthRadius + obj.avgAlt;
        let raisedThird = Math.pow(earthRAvgA, 3);
        let divideByGM = raisedThird / GM;
        let squareRoot = Math.sqrt(divideByGM);
        let ans = Math.round(twoXpie * squareRoot);
        delete obj.avgAlt;
        obj.orbitalPeriod = ans;
        return obj;
    };

    //creates new array with new values
    for (let e in arr) {
        newArray.push(getOrbitalPer(arr[e]));
        console.log(arr[e]);
    }
    console.log(newArray);
    return newArray;

}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);