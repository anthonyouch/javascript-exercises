const sumAll = function(num1, num2) {

    let totalSum = 0;

    // switch num1 and num2 if num1 > num 2

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (!(num1 > 0 && num2 > 0 && typeof(num1) == "number" && typeof(num2) == "number")) {
        return "ERROR"
    }

    if (Math.floor(num1) != num1 || Math.floor(num2) != num2 ) {
        return "ERROR";
    }


    for (let i = num1; i <= num2; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
