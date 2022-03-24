
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback){ // 5, 4, 3, 2 ,1, 0
    console.log(`${numsLeft}`); 
    if (numsLeft === 0){        
        return numsLeft;
    }
    sum = addNumbers(sum, numsLeft-1, completionCallback); 
    sum = sum + numsLeft; // 1, 3, 6, 10, 15
    completionCallback(sum); // Total Sum: 1
    return sum;
} 
   


rl.question("Enter a number: ", respose => {
    // console.log(`${respose}`);
    const numsLeft = parseInt(respose); // 5
    addNumbers(0, numsLeft, sum => console.log(`Total Sum: ${sum}`));    
    console.log(`==== END ====`);
    rl.close();
});


