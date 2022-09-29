// 04-from-pairs
// * Task description: Write a method that returns an object composed of key-value pairs.
// * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

function keyValue(array) {
    let obj = Object.fromEntries(array)
    return obj
}
console.log(keyValue([['a', 1], ['b', 2]]))