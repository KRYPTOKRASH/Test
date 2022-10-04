// 06-invoke
// * Task description: Write a method that invokes an array method on a specific path
// * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]

function invoke(obj) {
    return obj.a.b.splice(1, 2)
}
console.log(invoke({ a: { b: [1, 2, 3] }}))
