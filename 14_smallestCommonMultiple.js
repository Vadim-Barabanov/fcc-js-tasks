/*
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 *
 * The range will be an array of two numbers that
 * will not necessarily be in numerical order.
 *
 * For example, if given 1 and 3, find the smallest common multiple
 * of both 1 and 3 that is also evenly divisible by all numbers
 * between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
    // let max;
    // let min;
    // if (arr[0] < arr[1]) {
    //     min = arr[0];
    //     max = arr[1];
    // } else {
    //     min = arr[1];
    //     max = arr[0];
    // }
    // let newArr = [];
    // for (let i = min; i <= max; i++) {
    //     newArr.push(i);
    // }
    // Absolutely working but not efficient
    //    let common = 2;
    //    let counter = 0;
    //    while (true) {
    //        counter = 0;
    //        for (let i = 0; i < newArr.length; i++) {
    //            if (common % newArr[i] === 0) {
    //                counter++;
    //            }
    //        }
    //        if (counter === newArr.length) {
    //            break;
    //        } else {
    //            common += 2;
    //        }
    //    }
    //    console.log(common);
}

//smallestCommons([1, 5]);

//smallestCommons([1, 5]); // should return a number.
//smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([2, 10]); // should return 2520.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.
