//🎄🎄🎄🎄🎄🎄🎄🎄🎄//
//        AOC2021        //
//         DAY02         //
//       JAVASCRIPT      //
//      YANNICK KOLB     //
//🎄🎄🎄🎄🎄🎄🎄🎄🎄//


// Solution to first half of Day 02
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
var horizontal = 0;
var depth = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i].startsWith("forward")){
    forwardIncrease = array[i].substr(array[i].length - 2);
    horizontal = horizontal + parseInt(forwardIncrease);
    }

    if(array[i].startsWith("down")){
        depthIncrease = array[i].substr(array[i].length - 2);
        depth = depth + parseInt(depthIncrease);
    }

    if(array[i].startsWith("up")){
        depthDecrease = array[i].substr(array[i].length - 2);
        depth = depth - parseInt(depthDecrease);
    }
}
console.log("******** FIRST HALF - DAY02 ********")
console.log("Increase horizontal position by: " + horizontal);
console.log("Depth position by: " + depth);
console.log("Therefore the final position is: " + horizontal*depth);
console.log("******** FIRST HALF - DAY02 ********")


// Solution to second half of Day 02
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
var horizontal = 0;
var depth = 0;
var aim = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i].startsWith("forward")){
    forwardIncrease = array[i].substr(array[i].length - 2);
    horizontal = horizontal + parseInt(forwardIncrease);
    depthAim = forwardIncrease * aim;
    depth = depth + depthAim;
    }

    if(array[i].startsWith("down")){
        depthIncrease = array[i].substr(array[i].length - 2);
        aim = aim + parseInt(depthIncrease);
    }

    if(array[i].startsWith("up")){
        depthDecrease = array[i].substr(array[i].length - 2);
        aim = aim - parseInt(depthDecrease);
    }
}
console.log("******** SECOND HALF - DAY02 ********")
console.log("Increase horizontal position by: " + horizontal);
console.log("Depth position by: " + depth);
console.log("Therefore the final position is: " + horizontal*depth);
console.log("******** SECOND HALF - DAY02 ********")