// 09-intersection
// * Task description: Write a method that finds shallow intersections of objects
// * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
let a = { a: 1, b: 2 }
let b = { c: 1, b: 2 }
function intersection(obj1, obj2) {
    let arrResult = []
    let result = {}
    for (let i in obj1 ) for (let j in obj2) {
        if (i === j && obj1[i] === obj2[j]) {
            let path = {[i]: obj1[i]}
            arrResult.push(path)
        }
    }
    Object.assign(result, ...arrResult)
    return result
}

console.log(intersection(a, b))
