const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback ){

    console.log(`first number: ${el1}`);
    console.log(`second number: ${el2}`);
    rl.question("If first number is greater than second number: [Yes/No]", respose => {        
        if (respose === 'Yes'){
            callback(true);
            // return true;
        }
        else{
            callback(false); 
            // return false;
        }
    });
    
}
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == (arr.length - 1)) {
        console.log(arr);
        outerBubbleSortLoop(madeAnySwaps);
        // rl.close();
    }

    if (i <  (arr.length - 1)) {

        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
             if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            i = i + 1;
            innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        });
    }
}

// innerBubbleSortLoop([30, 10, 50, 1, 10], 0, false, (x) => {console.log("outerBubbleSort");});
// [2, 2, 4, 4, 7, 0, 3]




function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }
    
    innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
});

// function callback(el1, e12){
//     [el1, el2] = [e12, el1];
//     return [el1, el2];
//     // console.log("swap");
// }

// askIfGreaterThan(5, 3, sortCompletionCallback);

// askIfGreaterThan(4, 7);

// function bubbleSort(arr, askIfGreaterThan) {
//     let sorted = false;

//     while (!sorted) {
//         sorted = true;

//         for (let i = 0; i < arr.length - 1; i++) {
//             // if (arr[i] > arr[i + 1]) {
//             let el1 = arr[i];
//             let el2 = arr[i + 1]; 
//             [el1, el2] = askIfGreaterThan(arr[i], arr[i + 1], sortCompletionCallback);
//                 if (arr[i] !== el1){
//                     arr[i] = el1;
//                     arr[i+1] = el2;
//                     sorted = false;
//                 }
                
//             // }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([1, 3, 2, 66, 3, 4, 33, 3], askIfGreaterThan));