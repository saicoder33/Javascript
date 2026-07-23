//1 to 10 numbers using for loop
console.log("1 to 10 numbers using for loop");
for(let i =1 ; i<=10 ; i++){
    console.log(i);
}

//10 to 1 using while loop
console.log("10 to 1 using while loop");
let a = 10;
while(a >=1){
    console.log(a);
    a--;
}

//even numbers 1 to 20 using for loop
console.log("even numbers 1 to 20 using for loop");
for (let even= 1 ; even<= 20 ;even++){
    if(even % 2==0){
        console.log(even);
    }
}

//odd numbers 1 to 20 using while loop
console.log("odd numbers 1 to 20 using while loop");
let odd =1;
while(odd <= 20){
    if(odd % 2 != 0){
        console.log(odd);
    }
    odd++;
}

//multipllication table of 5 
console.log("multiplication table of 5");
let num = 5;
let i =1
while(i <= 10){
    console.log(num*i);
    i++;
}

//sum of numbers 1 to 100
console.log("sum of numbers 1 to 100");
let total_sum=0;
for(let num = 1; num <= 100; num++){
    total_sum +=num; 

}
console.log("sum of numbers 1 to 100 is: " , total_sum);

//print numbers 1 to 30 divisible by 3
console.log("print numbers 1 to 30 divisible by 3");
let j = 1;
while(j<=30){
    if(j % 3 === 0)
        {
           console.log(j);
        }
        j++;
}

//ask the user togive a number and from 1 to that number check which numbers are even and which are odd
// let userInput= prompt("Enter a number");
// for (let i = 1 ;i<=userInput ; i++){
//     if(i % 2 === 0){
//         console.log(i , " is even");
//     } else {
//         console.log(i , " is odd");
//     }
// }

//count how many numbers between 1 to 100 are divisible by 3 and 5
let count = 0;
for(let i = 1 ; i <= 100 ; i++){
    if( i % 3 === 0 && i % 5 === 0){
        count++;
        
       
    }
     
}
console.log("count of numbers between 1 to 100 divisible by 3 and 5 is: " , count);

//break questions
for (let num = 1 ; num <= 100 ; num++){
    if (num % 7 === 0){
        break;
    }
    console.log(num);
}

//continue questions
for(let a = 1 ; a<= 20; a++){
    if (a % 3=== 0){
        continue;
    }
    console.log(a);
}