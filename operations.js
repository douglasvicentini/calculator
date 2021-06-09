export const add = (firstNum, secondNum) => {
    let sum = firstNum + secondNum;
    return sum.toFixed(8);
};

export const subtract = (firstNum, secondNum) => {
    let subt = firstNum - secondNum;
    return subt.toFixed(8);
};

export const divide = (firstNum, secondNum) => {
    let quotient = firstNum / secondNum;
    return quotient.toFixed(8);
}  

export const multiply = (firstNum, secondNum) => {
    let product = firstNum * secondNum;
    return product.toFixed(8);
};

export const power = (base, exp) => Math.pow(base, exp);

export const factorial = (number) => {
    return (numer == 0 || number == 1) ? 1 : number * factorial(number-1);
};

export const sumArray = (numbersArray) => {
    let sum = 0;
  
    for (let index = 0; index < numbersArray.length; ++index)
        sum += numbersArray[index];

    return sum;
};

export const multiplyArray = (numbersArray) => {
    let product = 1;

    for (let index = 0; index < numbersArray.length; ++index)
        product *= numbersArray[index];

    return product;
};
