// 10-intersection
// * Task description: Write a method that creates an array of unique values that are included in all given arrays
// * Expected Result: ([1, 2], [2, 3]) => [2]

function intersection(arr1, arr2) {
    let result = []
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr2[j])
            }
        }
    }
    return result
}

console.log(intersection([1, 2], [2, 3]))