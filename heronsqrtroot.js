const userInput = require('prompt-sync')();
function squareRoot() {
    /* 
    A bunch of variables
    To not create them during the code
    It might have been confusing and difficult
    to keep track of them
    */
    let userName;
    let userChoice;
    let triangleArea;
    let firstSide;
    let secondSide;
    let rootEquation;
    const accuracy = 0.001;
    const division = 2;

    console.log(`
    Hi, let's calculate a square root of an number using Heron's method.
    First, let me know what's your name
    `);
    
    userName = String(userInput());
    
    console.log(`
    Great! Hi there ${userName}, nice to meet you :)
    Shall we begin?
    `);
    console.log(`
    1. YESSS
    2. NOOO
    `);
    
    userChoice = Number(userInput());

    while (userChoice != 1) {
        console.log(`
        Oh, that's alright ${userName}
        Exitting the script...
        `)
        throw new Error();
    }
    
    console.log(`
    Alright, so starting up, please give me a number that you want an square root of:
    `);
    
    triangleArea = Number(userInput());

    console.log(`
    Nice! Your number is ${triangleArea}
    `);

    firstSide = triangleArea;
    secondSide = triangleArea / firstSide;
    rootEquation = firstSide - secondSide;
    

    while(rootEquation > accuracy) {
        firstSide = (firstSide + secondSide) / division;
        secondSide = triangleArea / firstSide;
        rootEquation = firstSide - secondSide;
    }

    console.log(`
    Hey, I've got some good news ${userName}!
    Your square root of ${triangleArea} is here and it's ${secondSide.toFixed(1)}
    `);
}

squareRoot();