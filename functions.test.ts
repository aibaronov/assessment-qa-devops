const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("Return a result that is also an array", () =>{
        let testArray = [1,2,3,4,5];
        let shuffleTest = shuffleArray(testArray);
        let resultType = Array.isArray(shuffleTest);
        expect(resultType).toBeTruthy();
    }),

    test("Return an array of the same length", () =>{
        let testArray = [1,2,3,4,5];
        let shuffleTest = shuffleArray(testArray);
        let sameLength = true;
        if (testArray.length === shuffleTest.length){
            sameLength = true;
        }
        else{
            sameLength = false;
        }
        expect(sameLength).toBeTruthy();
    })
})