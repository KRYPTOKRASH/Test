// 04-is-empty
// * Task description: Write a method that makes a shallow check is object empty
// * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false

function empty(obj) {
    let result
    let checkLength = Object.keys(obj).length
    let checkKey = Object.keys(obj)
    let checkValues = Object.values(obj).join()
    if (checkLength === 0) {result = true}
    else if (checkKey === undefined)  {result = true}
    else result = checkValues === '';
    return result
}

console.log(empty({a: undefined}))
console.log(empty({undefined: undefined}))
console.log(empty({}))
console.log(empty({a: 1}))