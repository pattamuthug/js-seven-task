function ascenNumber(num) {
    // console.log(num);
    let a = num.toString();
    const num1 = [...a];
    // console.log(num1);
    let num2 = [...num1].sort();
    // console.log(num2);
    if (num1.join() == num2.join()) {
        return true;
    }
    else {
        return false;
    }
}
var number = prompt("enter the number");
var arr = [];
var j = 0;
for (let i = 1; i <= number; i++) {
    if (i % 7 == 0) {
        if (ascenNumber(i) == true) {
            arr[j] = i;
            j++;
        }
    }
}
console.log(arr);

