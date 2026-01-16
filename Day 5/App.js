console.log ("Day 5 of learning JavaScript")

// for loop
 // “A for loop is best when we know exactly how many times we need to run a block of code.”

 /*
 for (initialization; condition; update) {
    // Code
 }
*/

for (let count = 1; count  <= 5; count++){
    console.log("me", count );
}
let sum = 0;
for  (let i = 1; i<=100; i++){
    if (i % 2===0) { 
   // console.log(i)

    sum +=i;
}
} 
console.log(sum);

let language = "JavaScript";

for (let m =0; m < language.length; m++){
    console.log(language.charAt(m))
}

// Nested Loop

for (let i =1; i<=5; i++){
    for (let j=1; j<=3; j++)
        console.log(i,"row", "line", j, "line")
}

// BREAK AND CONTINUE
for (let i =1; i <=5; i++){
    if (i===3) break;
    console.log(i)
}

// CONTINUE
for (let i =1; i <=5; i++){
    if (i===3) continue;
    console.log(i)
}


// While Loop
    // “A while loop runs as long as a given condition is true. It’s best when we don’t know in advance how many iterations are needed.”
/*
 while(condition) {
    // Code
 }
*/

let counter = 1;
while(counter >=4) {
    console.log(counter);
    counter++;
}


// do while loop

let num = 1;
do {
    console.log(num);
    num++;
} while(num <=5)


/* infinit loop
for(;;){
    console.log("I am looping forever!!!")
}

while(true) {

}

do {
    // Code
} while(true)


*/

