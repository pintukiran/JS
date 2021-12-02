//*iterable object
//using for loop
let emp=[23,34,56,78,"Girish",true];
for(let i=0; i<=emp.length-1;i++){
    console.log(emp[i]);
}
console.log("------------------------------------------");


//using while loop

let i=0;
while(i<=emp.length-1){
    console.log(emp[i]);
    i++;
}
console.log("------------------------------------------");
//using do while
let a=0;
do{
    console.log(emp[a]);
    a++;
}while(a<=emp.length-1);
