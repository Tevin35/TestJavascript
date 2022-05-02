// Question 1 //
// copié collé de https://stackoverflow.com/questions/71188915/use-for-loop-to-iterate-from-0-to-100-and-print-the-sum-of-all-evens-and-the-sum //
let i;
let sumE = 0;
let sumO = 0;

for (i = 0; i <= 100; i++) {
    i % 2 === 0 ? (sumE += i) : (sumO += 1);
}

console.log(sumE, sumO);