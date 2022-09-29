// 08-flatten
// * Task description: Write a method that turns a deep array into a plain array
// * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
const arr = [1, 2, [3, 4, [5]]]
function flatten(arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr) === true) {
            count++
        }
    }
    return arr.flat(count)
}

console.log(flatten(arr))