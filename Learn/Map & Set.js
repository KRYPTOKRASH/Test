const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7]

const set = function (arr) {
    return Array.from(new Set(arr))
}

console.log(set(arr))