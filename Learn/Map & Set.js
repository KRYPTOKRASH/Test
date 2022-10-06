// Learn JS Map & Set

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7]
const set = function (arr) {
    return Array.from(new Set(arr))
}
// console.log(set(arr))

let map = new Map()
map.set('name', 'john')
let keys = Array.from(map.keys())
keys.push('more')
// console.log(keys)

//_____________________________________
// CROCODER tasks: https://crocoder.dev/blog/map-filter-reduce-exercises

const input0 = [1, 2, 3, 4, 5]
const task1 = input0.map((num) => num ** 2)
console.log(task1)



const input1 = [1, -4, 12, 0, -3, 29, -150]
const sum = function (num) {
    if (num >= 0) {
        return num
    }
}
const result = input1.filter(sum).reduce((num1, num2) => num1 + num2)
console.log(result)



const input2 = [12, 46, 32, 64]
const mean = input2.reduce((num1, num2) => (num1 + num2)) / input2.length
const median = input2[Math.floor(input2.length / 2)]
console.log(mean, median)



const reduceName = 'George Raymond Richard Martin'
let resultReduce = reduceName.split(' ').map((fWord) => fWord[0]).join('')
console.log(resultReduce)



const input3 = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
]

const age = input3.map(value => value.age)
const min = Math.min(...age)
const max = Math.max(...age)
const difference = max - min
const resultAge = [min, max, difference]
console.log(resultAge)



const input4 = 'Every developer likes to mix kubernetes and javascript'
let split = input4.split(' ').map((sWord) => sWord[0] + (sWord.length - 2) + sWord[sWord.length - 1]).join(' ')
console.log(split)



const input5 = 6;
let factorial = new Array(input5)
let n = 1
factorial = factorial.fill(1).map((num1, n) => num1 * (n+1)).reduce((num1, num2) => num1 * num2)
console.log(factorial)



const input6 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];

let deep = input6.flat(1)
let deepResult = deep.reduce((result, Value) => {
    if (result[Value]) {
        result[Value] = result[Value] + 1
    } else {result[Value] = 1}
    return result
}, {})
console.log(deepResult)