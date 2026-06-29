function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const answer: number[] = new Array(n).fill(0);
    const stack: number[] = []; // Stores indices of the temperatures

    for (let i = 0; i < n; i++) {
        const currentTemp = temperatures[i]!;

        // While the stack is not empty AND the current temperature is warmer
        // than the temperature at the index on top of the stack

        let stackSize : number = stack.length; 
        while (stackSize > 0 && currentTemp > temperatures[stackSize - 1!]!) {
            const prevIndex = stack.pop()!; // Get the colder day's index
            answer[prevIndex] = i - prevIndex; // Calculate the days waited

            stackSize =stack.length;
        }

        // Push the current day's index onto the stack
        stack.push(i);
    }

    return answer;
}
// size is for array in java
function highestHistogram(heights: number[]) : number {
    const n = heights.length; 
    let answer : number = 0 ; 
    const stack: number[] = [];

    let maxArea = 0;
   
    for(let i = 0 ; i < n ; i ++){
        const currentHeight = heights[i]!;
        
        let areaSum = currentHeight ?? 0;

        for(let x = (0); x < n; x++){
            if(x != i){
            if( ((heights[x]!) - currentHeight) > 0) {
                areaSum += currentHeight;
            }else{
                if(x > i)
                break;
            } 
        }
        }
     
        maxArea = Math.max(areaSum, maxArea)
    }


    return maxArea;
}
const test22 = highestHistogram([2,1,5,6,2,3]);
// Test cases
const test1 = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log("Test 1:", test1);
// Expected: [1, 1, 4, 2, 1, 1, 0, 0]

const test2 = dailyTemperatures([30, 40, 50, 60]);
console.log("Test 2:", test2);
// Expected: [1, 1, 1, 0]

const test3 = dailyTemperatures([30, 60, 90]);
console.log("Test 3:", test3);
// Expected: [1, 1, 0]


//TODO: See why typescript doesn't have a dedicated stack and queuee class library 