// 08-is-equal-deep
// * Task description: Write a method that makes a deep compare of two objects
// * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

function equalDeep(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log(equalDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }))