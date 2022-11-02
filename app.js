console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// let count = prompt("What should we count odds to?")
// function printOdds(count) {
//     if (count > 0) {
//         for (let i = 0; i <= count; i++) {
//             if (i % 2 === 0) {
//                 continue;
//             } else if (i % 2 === 1) {
//                 console.log(i);
//             }
//         }
//     } else if (count < 0) {
//         for (let i = 0; i >= count; i--) {
//             if (i % 2 === 0) {
//                 continue;
//             } else if (i % 2 === -1) {
//                 console.log(i);
//             } 
//             }   
//     }

// }

// printOdds(count);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// const userName = prompt("Howdy, stranger! What's your name?")
// const age = prompt("And how old are you?")
// function checkAge(userName, age) {
//     if (age >= 16) {
//         console.log(`Congrats ${userName}, you can drive!`);
//     } else if (age < 16) {
//         console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
//     } else if (age === undefined && userName === undefined) {
//         console.log(`You're going to need to help me a little bit here.`)
//     } else if (age === undefined) {
//         console.log(`I'm gonna need an age ${username}`);
//     } else if (userName === undefined) {
//         console.log(`I cant help you without a name, buddy`)
//     }
        
// }
// checkAge(userName, age);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// let x = prompt("X Value");
// let y = prompt("Y Value");

// function cartesianPlane(x,y) {
//     if (x > 0 && y > 0) {
//         console.log("Quadrant 1");
//     } else if (x > 0 && y < 0) {
//         console.log("Quadrant 4");
//     } else if (x < 0 && y < 0) {
//         console.log("Quadrant 3");
//     } else if (x < 0 && y > 0) {
//         console.log("Quadrant 2")
//     } else if (x == 0 && y == 0) {
//         console.log("crosshairs");
//     } else if (y == 0) {
//         console.log("y axis");
//     } else if (x == 0) {
//         console.log("x axis")
//     }
// }

// cartesianPlane(x,y)


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// let a = parseInt(prompt("side 1"));
// let b = parseInt(prompt("side 2"));
// let c = parseInt(prompt("side 3"));

// function triangulus(a, b, c) {
//     console.log(a);
//     console.log("a");
//     console.log(b);
//     console.log("B");
//     console.log(c);
//     console.log("c")

//     if ((a + b) > c && (c + b) > a && (a + c) > b) {
//         if (a === b && b === c) {
//             console.log("equilateral triangle")
//         } else if (a != b && b != c && a != c) {
//             console.log("scalene triangle")
//         } else {
//             console.log("isoceles triangle")
//         } 
//     } else {
//         console.log("invalid triangle");
//     }
// }

// triangulus(a, b, c);


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");



function cellPhonePlan(planLimit, day, usage) {
    const daysLeft = 30 - day;
    const dataAverage = usage / day;
    const gigsLeft = planLimit - usage;
    const planAverage = planLimit / 30;
    const dailyDataAllotment = gigsLeft / daysLeft;
    
    if (planLimit >= usage) {
        if (planLimit > usage) {
            console.log(`You still have ${gigsLeft}GB left`);
        } else if (planLimit == usage) {
            console.log(`You are out of data`)
        }
        
    }
    if (day <= 30) {
        console.log(`${day} days used, ${daysLeft} remaining`);
    }
    if (dataAverage < planAverage) {
        console.log(`You are using an average of ${dataAverage}GB/day. You are currently using less than your daily average.`);
    } else if (dataAverage > planAverage) {
        console.log(`You are exceeding your daily average (${dataAverage}). By continuing this high usage, you will exceed your data plan by ${(dataAverage * daysLeft) - gigsLeft}GB. In order to stay under your plan, you must use ${dailyDataAllotment}GB/day`)
    }
}

cellPhonePlan(100, 25, 85);
