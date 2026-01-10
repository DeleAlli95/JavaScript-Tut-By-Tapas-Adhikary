console.log("Day 4  Mastering control flows JavaScriot");

//

let age = 12;
if (age >= 18) {

    console.log("candidate is eligible to vote")

} 
else{

    console.log("candidate not eligible to vote")
 }

let y = 1;

if (y===1){

    console.log(1)
}
else if(y >=1){

    console.log("yes")
}
 else if (y <=1){

    console.log("no")
}


//

let score =71; 

if (score >= 90) {
    console.log("Grade A"); 

}  if (score >= 80) {
    console.log("Grade B");

}  if (score >= 70) {
    console.log("Grade C");

} if (score <70 ) {
    console.log("failed");
}

//
const condition = true;
const innerCondition = true;

if (condition) {
    console.log("outer if")

    if (innerCondition) {
        console.log("inner if")

    } else {
        console.log("inner else")

    }
} else {
    console.log("outer else")
}

/* 
let catchingBus = true;

if (catchingBus) {
    console.log("oh, yes you will be home soon");

}else {
    console.log("oops, it may take time")
}
*/

//  tenary operator istead of single ifElse
  let catchingBus = true; 
  catchingBus ? console.log ( "oh, yes you will be home soon" ): ("oops, it may take time");


// switch condition

let number =13;

switch (number) {
    case 0:
         console.log("print 0");
    break;
    case 1:
         console.log("print 1");
    break;
    case 2: 
         console.log("print 2");
    break;
    case 3: console.log("print 3");
    break;
    case 4: console.log("print 4");
    break;
    case 5: console.log("print 5");
    break;
    case 6: console.log("print 6");
    break;
    case 7: console.log("print 7");
    break;
    case 8: console.log("print 8");
    break;
    case 9: console.log("print 9");
    break;
    case 10: console.log("print 10");
    break;

     default:
     console.log ("no number found")
}



































