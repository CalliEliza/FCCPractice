

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

  //  The values should be rounded to the nearest whole number. The body being orbited is Earth.

  //  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// formula needed: T = 2(3.14)(squareRoot((earthRadius + avAlt)^3)/GM)


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const twoXpie = 6.283185307;
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);