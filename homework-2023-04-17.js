/*
Below is the homework associated with the loops that we learned about:

1. Print all of the even numbers between 0 and 100. The correct output will start with 2, 4, 6, .... Do not include the number 0 and do not include the number 100.

2. Given the following array, calculate the sum of the numbers from the array: [8, 14, "6", 22, 455, "37.31"]. Notice that some of the numbers are provided as strings.

3. Given the following array ([33, 0.57, 10.2, 95, 73, 14, 81, 68, 42]), find the largest number in the array, and print out to the console: "The largest number in the array is: LARGEST_NUMBER", where LARGEST_NUMBER is replaced with the actual largest number that you have calculated from the array.

4. Given the following array (["apple", "pear", 15, "dog", 43, "apple", "house", "cat", 51, 8, 15, "apple", "mouse", "wall"]), identify the number of duplicate values that are in the array. Print out to the console: "The number of duplicates is: X", where X is replaced by the number of duplicate values that your code has identified in the array. If the value occurs more than once, it should be considered a duplicate. "Look alike" values are not required to be considered. However, if you can figure out how to account for "look alike" values, then great! We will cover how to deal with those in class.

Please note that we will test your code with our own sample arrays, so try to think of all of the possible cases for which your code should work. Also, remember what we learned in class about the tire swing! Be sure to make sure you fully understand the requirements before jumping in to the code. Good luck!
*/

// Task 1.
function printEvens(start, end) {
    // Just fail silently if the provided arguments are not integers.
    if (Number.isInteger(start) && Number.isInteger(end)) {

        function isEven(integer) {
            return !(integer % 2);
        }

        let evens = [];
        let i = isEven(start) ? start + 2 : start + 1;
        for (i; i < end; i += 2) {
            evens.push(i);
        }
        console.log(evens.join(", "));
    }
}

printEvens(0, 100);

// Task 2.
function sumOfArray(array) {
    let sum = 0;
    for (let i of array) {
        // I want to operate only on finite numbers or "numbers-as-strings",
        // but not on boolean values (which are convertible to 0 or 1).
        if (isFinite(i) && typeof i !== "boolean") {
            sum += Number(i);
        }
    }
    return sum;
}

console.log(sumOfArray([8, 14, "6", 22, 455, "37.31"]));

// Task 3.
function maxOfArray(array) {
    // I want to operate only on numbers or "numbers-as-strings",
    // but not on boolean values (which are convertible to 0 or 1).
    let cleanArray = array.filter(v => !isNaN(v) && typeof v !== "boolean");
    let max = -Infinity;
    for (let i of cleanArray) {
        if (i > max) {
            max = i;
        }
    }
    console.log(`The largest number in the array is: ${max}`);
}

maxOfArray([33, 0.57, 10.2, 95, 73, 14, 81, 68, 42]);

// Task 4.
function numberOfDups(array) {
    let counter = {};
    let dupsNumber = 0;
    for (let i of array) {
        // Converting everything to string resolves problems
        // with "look alike" values of primitive types.
        if (String(i) in counter) {
            counter[String(i)] += 1;
        } else {
            counter[String(i)] = 1;
        }
    }
    for (let i of Object.values(counter)) {
        dupsNumber += (i > 1) ? 1 : 0;
    }
    console.log(`The number of duplicates is: ${dupsNumber}`);
}

numberOfDups(["apple", "pear", 15, "dog", 43, "apple", "house", "cat", 51, 8, 15, "apple", "mouse", "wall"]);
