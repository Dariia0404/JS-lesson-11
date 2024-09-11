/*
function sum(a, b) {
    console.log(a + b);
}

function decorateSum(sumFunc) {
    return function (a, b) {
        console.log(`Logging arguments ${a} & ${b} equals`);
        sumFunc(a, b);
    };
}

let decoratedSum = decorateSum(sum);

decoratedSum(11, 33);
*/



/*
function validate(fn, validator) {
  return function (...args) {
    if (!args.every(validator)) {
      throw new Error("Some error message");
    }
    return fn(...args);
  };
}

let isNumber = (a) => typeof a === 'number';

function sum(a, b) {
  return a + b;
}

let validatedSum = validate(sum, isNumber);

console.log(validatedSum(3, 4)); 
console.log(validatedSum(3, '4'));
*/







function retry(fn, maxAttempts) {
        let count = 0;
        let lastResult;
    return function(...args) {
        if(count < maxAttempts) {
            count++;
                lastResult = fn(...args);
                return lastResult;
             }

        return lastResult; 
    };
}

function sum(a, b) {
    return a + b;
}
let decoratedFn = retry(sum, 3);


console.log(decoratedFn(2, 7)); 
console.log(decoratedFn(3, 1)); 
console.log(decoratedFn(3, 3));  
console.log(decoratedFn(3, 8));  
console.log(decoratedFn(9, 4));   

