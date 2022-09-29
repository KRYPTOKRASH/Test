// 09-chunk
// * Task description: Write a method that splits an array into parts of determined size
// * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
const arr = [1, 2, 3, 4, 5]
let amount = 2

function chunk(arr, amount) {
    let arrCh = []
    for (i = 0; i < arr.length; i += amount) {
        const mChunk = arr.slice(i, i + amount)
        arrCh.push(mChunk)
    }
    return arrCh
}
console.log(chunk(arr, amount))