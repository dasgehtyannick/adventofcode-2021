//🎄🎄🎄🎄🎄🎄🎄🎄🎄//
//        AOC2021        //
//         DAY01         //
//       JAVASCRIPT      //
//      YANNICK KOLB     //
//🎄🎄🎄🎄🎄🎄🎄🎄🎄//


// Solution to first half of Day 01
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
var increasedDepth = 0;
for(i in array) {
    if(i != 0 && array[i] > array[i-1]){
        increasedDepth++;
    }
}

console.log("There are " + increasedDepth + " measurements larger than the previous one.");


// Solution to second half of Day 01
var threeMeasurement = 0;
for (let i = 0; i < array.length; i++) {

    let first = parseInt(array[i]);
    let second = parseInt(array[i+1]);
    let third = parseInt(array[i+2]);
    let fourth = parseInt(array[i+3]);
   
    if( (first + second + third) < (second + third + fourth)){
        threeMeasurement++;
    }
}

console.log("There are " + threeMeasurement + " three-measurements larger than the previous one.");