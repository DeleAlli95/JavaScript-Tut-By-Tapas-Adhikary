/*1. Odd or Even?
 Take a number and find if the number is an odd or even number.
 Print the number and result in the console.*/

let Number = 637;
let result = Number % 2 === 0 ? 'is an Even Number':' Not an Even Number';
console.log(Number, result);

/*2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.*/

console.log("Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.");
let age = 17;
let res = age >=18 ? "you're Eligible for driver's licence": "you're not Eligible ";
console.log(age, res)


 
/*3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?*/

 console.log('Calculate CTC with a Bonus');

 let mySalary = 12300;
 let myAnnualSalary = mySalary * 12;
 let Bonus = (20 / 100) * myAnnualSalary;
 console.log("MY montly  Salary :", mySalary);
 console.log("My Annual Salary :",  myAnnualSalary);
 console.log("My Total Salary with Bonus is:", myAnnualSalary + Bonus );


/*4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.*/
 
console.log("Traffic Light Simulation");
let signal = "green";
let action = signal === "Red" ? "Stop" : "GO";
console.log("Signal:", signal, '=', action);


/*5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?*/

 let unit = 20;
 let billForMonth = unit * 150 * 30;
 let AnnualBill =  billForMonth * 12;
 let discOnAnnualBill = AnnualBill - (0.20) * AnnualBill; 
 console.log("your AnnualPayment minus discount is", discOnAnnualBill);



/*6. Leap Year Checker
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.*/

let year = 2025;
let feedback = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? "Leap year" : "Not a leap year";
console.log(feedback);


/*7. Max of Three Numbers
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.*/


p = 5
q = 9
r = 2
let max = (p >= q && p >= r) ? p  : (q >= p && q >= r) ? q : r; 

console.log("maximum number is :", max);

/*8. Bitwise Doubling
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.*/

let count = 5;

let doubled = count << 1;

console.log(doubled);
