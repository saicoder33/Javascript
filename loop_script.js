//Basic for loop
for(let i=0 ; i<=10 ; i++){
    console.log(i);
    console.log("Hello");
}

//Basic while loop
let i =1
while (i < 50){
    console.log(i);
    i++;
}

//Basic do while loop
let a = 1
do{
    console.log(a);
    a++;
}while(a < 10);

//break
for (let b=1 ; b<=50 ; b++){
    console.log(b);
    if(b===33){
        break;
    }
}

//continue
for (let b=1 ; b<=50 ; b++){
    
    if(b===33){
        continue;
    }
    console.log(b);
}
