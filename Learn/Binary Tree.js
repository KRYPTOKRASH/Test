const fibInt = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

function binaryTree(arr, value) {
    let left = 0
    let right = arr.length - 1
    let center;

    while (left <= right) {
        center = Math.round((right - left)/ 2) + left
        if (value === arr[center]) {
            return center
        } else if (value < arr[center]) {
            right = center
        } else {
            left = center + 1
        }
    }
    return console.log('Не найдено')
}

console.log(binaryTree(fibInt, 34))
console.log(binaryTree(alphabet, 'h'))