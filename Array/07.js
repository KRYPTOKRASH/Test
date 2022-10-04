// 07-is-equal
// * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
// * Expected Result: ([1, 2, 3], [1, 2, 3]) => true

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

function equal(arr1, arr2) {
    if (arr1.join() === arr2.join()) {
        return true
    } else {return false}
}
console.log(equal(arr1, arr2))