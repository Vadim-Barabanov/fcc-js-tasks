/*
 * Given a positive integer num, return the sum of all odd
 * Fibonacci numbers that are less than or equal to num.
 *
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd
 * Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(num) {
    let sequence = [0, 1, 1];

    if (num < 3) return 1;
    for (let i = 2; i < num; i++) {
        sequence.push(
            sequence[sequence.length - 1] + sequence[sequence.length - 2]
        );
    }

    let counter = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] % 2 !== 0 && sequence[i] <= num) {
            counter += sequence[i];
        }
    }

    console.log(sequence);
    console.log(counter);
}

// sumFibs(1); // should return a number.
sumFibs(4); // should return 5.
sumFibs(15);
// sumFibs(1000); // should return 1785.
// sumFibs(4000000); // should return 4613732.
// sumFibs(75024); // should return 60696.
// sumFibs(75025); // should return 135721.
