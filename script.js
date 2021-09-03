"use strict";
//Assumptions
//N is within [1..100,000]
//each element of A in withing //[-1,000,000..1,000,000]
//MVP:Function that returns the
//smallest integer that isn't inside of 
//array A including unit tests and integration tests 
//Bonus:Write benchmark function which is a performance test
Object.defineProperty(exports, "__esModule", { value: true });
exports.smallestInt = void 0;
//Brute force approach: Since we know it has to be a 
//positive integer we can assume that the lowest number 
// i = 1 and for efficiency sake we can use A.length to 
//determine the range .
// function smallestInt(A){
//   for (i = 1; i < A.length ; i++){
//    if(notIn.A.includes(i)){
//    return i;
//    }
//  }
//}
//This has a time complexity of O(n^2) and would be of 
//course very inefficient. We ideally would like to aim
// for O(n) or better .
//--Thought process--
//From what the problem seems to be asking there could be two possible approaches I
//think would work best and it depends on the goal you want to achieve.
//I think if you want to prioritize time complexity a hash 
//map would be the way to
//go but writing a hash table would also be time consuming... unless you create a set
//For the tests we can use the examples and see if it's returning the correct output
function smallestInt(A) {
    var numberSet = new Set();
    var maxNumber = 0;
    //we want to iterate through the set of numbers so i=0
    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            numberSet.add(A[i]);
            maxNumber = Math.max(maxNumber, A[i]);
        }
    }
    for (var i = 1; i < maxNumber; i++) {
        if (!numberSet.has(i)) {
            return i;
        }
    }
    return maxNumber + 1;
}
exports.smallestInt = smallestInt;
//instead of hard-coding the maximum range(1,000,000) we can have
//a dynamic range depending on user input using a set of
//numbers
//We could also rewrite it and instead of using Set() we can instead implement the filter method //since we know 
//the range is positive and the minimum is 1 like this
// A = A.filter(filtered => filtered >= 1).sort((a,b)=> a-b). the sort method is just returning the 
//array in order and then you loop through that sorted array. I personally find this very hard to read so //i used a Set() instead
//# sourceMappingURL=script.js.map