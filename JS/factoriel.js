function data(input){
let num = Number(input[0]);

/*LOGIC*/
let sum = 1;
for (i=1; i<=num; i++){
sum *= i;
}
console.log(sum);


}
data(["8"])

/* произволно число на степен

function data(input0, input1){

if (input1 === 1 ){
    return input0;
}else {
    return input0*data(input0, input1-1)
}


}

let result = data(5, 8);

console.log(result);*/





/* рекурсивна функция за смятане на степенite na 2

function data(input) {
 (=== 1 за да остане оригиналното число за дъно)
    if (input === 1) {
return 2;
    }else{
        return 2*data(input-1);
    }

първо се вика само себе си, стига дъното и се връща обратно. Консол лог печата резултата)

}
let result = data(5);

console.log(result);*/





/*function data(num){*/

/*Важно. Факториел*/
/* return 1;
}else{
    return num*data(num-1);
}/* присвояваме на result входящата функция. 
}


let result = data(5);

console.log(result);*/
// program to count down numbers to 1



/*
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);*/
