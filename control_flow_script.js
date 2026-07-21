console.log("Control Flow Statements");


// If-Else Statement
let age = 21
if (age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

//if-Else If Statement
let marks = 85;
if (marks >= 90){
    console.log("Grade:A");
}
else if (marks >= 80){
    console.log("Grade:B");
}
else{
    console.log("Grade:C");
}

//Switch Case
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    }

//Early Return
let num = -5;
function Val (num){
    if (num < 0){
        return "Negative number";
    }
    return "Positive number";
}

Result = Val(num);
console.log(Result); // Output: Negative number

//Rock paper scissors logic
function rps (user,computer){
     if ( user == "rock" && computer == "scissors") return "User wins";
     if (user == "scissors" && computer == "paper") return "User wins";
     if (user == "paper" && computer == "rock") return "User wins";

     if (user == computer) return "It's a tie";
    
     return "Computer wins";
}

Result = rps("scissors","rock");
console.log(Result); 