let num1 = 2;
let num2 = 5;

function myFuntion (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return 'numbers are equal!';
    }
}

console.log('Bigger number is: ' + myFuntion(num1, num2));