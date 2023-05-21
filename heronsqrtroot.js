const userInput = require('prompt-sync')();
function squareRoot() {
    /* 
    A bunch of variables
    To not create them during the code
    It could be confusing and difficult
    to keep track of
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
     _____   _____     _____    _____        _   _   _____   _____    _____   __   _  
    /  ___/ /  _  \\   |  _  \\  |_   _|      | | | | | ____| |  _  \\  /  _  \\ |  \\ | | 
    | |___  | | | |   | |_| |    | |        | |_| | | |__   | |_| |  | | | | |   \\| | 
    \\___  \\ | | | |   |  _  /    | |        |  _  | |  __|  |  _  /  | | | | | |\\   | 
     ___| | | |_| |_  | | \\ \\    | |        | | | | | |___  | | \\ \\  | |_| | | | \\  | 
    /_____/ \\_______| |_|  \\_\\   |_|        |_| |_| |_____| |_|  \\_\\ \\_____/ |_|  \\_| `);

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
    /*
    This is put here to give user an option to leave
    While the choice of an user isn't 1 then it will...
    ...give an error
    */
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

    /*
        It might be confusing at first...
        ...but it's just a formula and that Heron's method...
        ...of calculating a square root
        I don't if this will help but here's some more...
        ...about the Heron's Formula
        https://www.hellenicaworld.com/Greece/Science/en/HeronsMath.html
    */
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
    To learn some more about Heron's Formula, here's an article:
    https://www.hellenicaworld.com/Greece/Science/en/HeronsMath.html
    `);
}

squareRoot();