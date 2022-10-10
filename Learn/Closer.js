function closer(n) {
    return function (num) {
        return num * n
    }
}
const closer1 = closer(1)
const closer2 = closer(2)
const closer3 = closer(3)
console.group('First task:')
console.log(closer1(100))
console.log(closer2(100))
console.log(closer3(100))
console.groupEnd()



function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: 'Maxim', age: 22, job: 'Frontend'}
const person2 = {name: 'Kseniya', age: 22, job: 'ios developer'}

function bind(context, fn) {
    return function (...args) {
      fn.apply(context, args)
    }
}
console.group('Second task:')
bind(person1, logPerson)()
bind(person2, logPerson)()
console.groupEnd()


function makeCounter() {
    let count = 0

    return function() {
        return count++
    }
}
console.group('Counter task:')
let counter = makeCounter()
let counter2 = makeCounter()


console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter2()); // 0
console.groupEnd()

function sum(a) {
    return function (b) {
        return a + b
    }
}

console.group('Closer task:')
console.log(sum(4)(7))
console.groupEnd()

console.group('Array filter task:')
let arr = [1, 2, 3, 4, 5, 6, 7]

function between(a, b) {
    return function (x) {
        return x >= a && x <= b
    }
}

console.log(arr.filter(between(2, 5)))

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}
console.log(arr.filter(inArray([2, 5, 7, 10, 150])))
console.groupEnd()


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField(key) {
    return (a,b) => a[key] > b[key] ? 1 : -1
}

users.sort(byField('name'))
users.forEach(user => console.log(user.name))
console.log('_____________________________')
users.sort(byField('age'))
users.forEach(user => console.log(user.name))



function makeArmy() {
    let shooters = []

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i)
        }
        shooters.push(shooter)
    }
    return shooters
}

let army = makeArmy()
army[0]()
army[5]()