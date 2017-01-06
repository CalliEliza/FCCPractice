/**
 * Created by callie on 6/5/15.
 */
// problems from JavaBook

// 1.8 // pg. 27
function DrainAccount() {
    var monthsToZero = 0;
    var account = 10000;
    var interest = .005;
    var collegeExp = 500;
    while (account > 0) {
        account = account - (account * interest);
        account = account - collegeExp;
        monthsToZero++;
    }
    return monthsToZero;
}


// 1.9 //
function DrainAct(account, interest, expense) {
    var monthsToZero = 0;
    var yearsToZero = 0;
    if ((account <= 0) || (account < expense) || account < interest) {
        return console.log("Please check the information you entered. A value seems to be invalid");
    }
    else {
        while (account > 0) {
            account = account - (account * interest);
            account = account - expense;
            monthsToZero++;
        }
        yearsToZero = monthsToZero / 12;
        return yearsToZero;
    }
}

// 1.10 //
function SurfaceArea(width,length, height, NumWindows, NumDoors, WinWidth, Winheight, DoorWidth, DoorHeight) {
    var SurfAr = width * length * height;
    var WinArea = NumWindows * Winheight * WinWidth;
    var DoorArea = NumDoors * DoorHeight * DoorWidth;
    var total =  SurfAr - WinArea - DoorArea;
    return total;
}

// 1.11 //
function CarVsTrain(CarDist,CarFuel,TrainPrice) {
    var gas = 4;
    var CarMaint = .05 * CarDist;
    var GallonsUsed = CarDist / CarFuel;
    var CostCar = (GallonsUsed * gas) + CarMaint;
    var EffiecentOption = [];
    if (CostCar > TrainPrice) {
        EffiecentOption.push('Train');
    }
    else if (TrainPrice > CostCar) {
        EffiecentOption.push('Car');
    }
    else if (TrainPrice == CostCar) {
        EffiecentOption.push('no difference');
    }
    return EffiecentOption;
}

// 1.12 //
function CarUsedWork(WorkDist, DaysWorked, MilesTravelled) {
    var DistTravelledWork = DaysWorked * WorkDist;
    var NonWorkTravel = MilesTravelled - DistTravelledWork;
    var WorkRatio = DistTravelledWork / MilesTravelled;
    var NonWorkRatio = NonWorkTravel / MilesTravelled;
    var answer = "I spent " +WorkRatio+ " of my travel driving to work, and " +NonWorkRatio+ " of my travel driving for personal use.";
    return answer;
}

