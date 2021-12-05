//🎄🎄🎄🎄🎄🎄🎄🎄🎄//
//        AOC2021        //
//         DAY03         //
//       JAVASCRIPT      //
//      YANNICK KOLB     //
//🎄🎄🎄🎄🎄🎄🎄🎄🎄//


// Solution to first half of Day 03
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
var gammaArray = [0,0,0,0,0,0,0,0,0,0,0,0];
var countZeros = 0;
var countOnes = 0;

for (let j = 0; j < 12; j++){
for (let i = 0; i < array.length; i++) {
  if((parseInt(array[i].substr(j,1))) == 0){
    countZeros++;
  } else {
    countOnes++
  }
}
  if (countZeros > countOnes){
    gammaArray[j] = 0;
  } else {
    gammaArray[j] = 1;
  }

  i = 0;
  countZeros = 0;
  countOnes = 0;
}

console.log(gammaArray);
// 1503 in decimal

for(let k = 0; k < 12; k++){
  if(gammaArray[k] == 0){
    gammaArray[k] = 1;
  } else {
    gammaArray[k] = 0;
  }
}

console.log(gammaArray);
// 2592 in decimal

let powerConsumption = 1503*2592;
console.log(powerConsumption);

// Solution to second half of Day 03
