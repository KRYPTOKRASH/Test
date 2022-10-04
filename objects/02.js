// 02-make-pairs
// * Task description: Write a method that returns a deep array like [[key, value]]
// * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function makePairs(obj) {
    let array = []
    for (let key in obj) {
        let arr = []
        arr.push(key)
        arr.push(obj[key])
        array.push(arr)
    }
    return array
}

console.log(makePairs({ a: 1, b: 2 }))
