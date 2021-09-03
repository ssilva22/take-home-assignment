import {smallestInt} from "./script"

//remove the x to stop skipping the tests
describe('smallestIntFunction',() => {
    xit('should return an array of numbers',() =>{
        expect(smallestInt([1,2])).toBeDefined();
    })

    xit("given A= [1,3,6,4,1,2] the function returns 5",()=>{
        expect(smallestInt([1,3,6,4,1,2])).toEqual(5)
    })

    xit("given A = [1,2,3] the function returns 4",()=>{
        expect(smallestInt([1,2,3])).toEqual(4)
    })

    xit("given A = [-1,-3] the function returns 1 ",()=>{
        expect(smallestInt([-1,-3])).toEqual(1)
    })
})
