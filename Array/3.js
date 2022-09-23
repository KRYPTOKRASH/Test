// * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
// * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function clear(array) {
    let arr = [];
    for (i = 0; i < array.length; i++ ) {
        if (array[i] !== 0 && array[i] !== false && array[i] !== undefined && array[i] !== '' && array[i] !== null) {
            arr.push(array[i])
        }
    }
    return arr
}
console.log(clear([0, 1, false, 2, undefined, '', 3, null]))