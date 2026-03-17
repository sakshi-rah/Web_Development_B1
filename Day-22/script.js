// For Loop
// for (let i = 1; i<=5; i++){
//     document.write("Number: ", i , "<br>");
// }

//While Loop

// let i = 1;

// while(i <= 5){
//     document.write("Number: ", i , "<br>");
//     i++;
// }

// Do While Loop

// let a = 1;

// do{
//     console.log("Number: ", a );
//     a++;
// }while ( a >= 3);

// Break and Continue Keywords

/* for(let i = 1; i<=10; i++){
    if(i == 8){
        break; // stop the loop
    }
    console.log("i:", i);
}

for(let i = 1; i<=10; i++){
    if(i == 7){
        continue; // skip the loop
    }
    console.log("i:", i);
}*/

// Switch Case

// let char = 'a';
let day = 0;

switch(day){
    case 0: console.log("SUN");
    break;
    case 1: console.log("MON");
    break;
    case 2: console.log("TUE");
    break;
    case 3: console.log("WED");
    break;
    case 4: console.log("THUR");
    break;
    case 5: console.log("FRI");
    break;
    case 6: console.log("SAT");
    break;
    default: console.log("Invalid Day!");
    break;
}

// HW => Even Number
// if(i%2 == 0){
//     console.log("Even Num");
// }