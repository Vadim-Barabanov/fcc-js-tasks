/*
 * A prime number is a whole number greater than 1 with exactly two divisors:
 * 1 and itself. For example, 2 is a prime number because it is only divisible
 * by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 *
 * Rewrite sumPrimes so it returns the sum of all prime
 * numbers that are less than or equal to num.
 */

function sumPrimes(num) {
    let arr = [];
    // creating array from 2 to ${num} (inclusive)
    for (let i = 2; i <= num; i++) {
        arr.push(i);
    }

    let newArr;
    // pushing new array by prime numbers
    newArr = arr.filter((item) => {
        for (let i = 2; i < item; i++) {
            if (item % i === 0) {
                return false;
            }
        }
        return true;
    });
    console.log(newArr);

    let sum = 0;
    newArr.forEach((item) => {
        sum += item;
    });

    return sum;
}

console.log(sumPrimes(10)); // should return a number.
// sumPrimes(10); // should return 17.
// console.log(sumPrimes(977)); // should return 73156.
