// 10-intersection-deep
// * Task description: Write a method that finds all intersections of objects
// * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

let a = { a: 1, b: { c: 3 } }
let b = { c: 1, b: { c: 3 } }

function interDeep(obj1, obj2) {
    let arrResult = []
    let result = {}
    for (let i in obj1) for (let j in obj2) {
        if (typeof obj1[i] === "object" && typeof obj2[j] === "object" && i === j) {
            if (JSON.stringify(obj1[i]) === JSON.stringify(obj2[j])) {
                let path = { [i]: obj1[i] }
                arrResult.push(path)
            } else {return 'No intersection'}
        }
    }
    Object.assign(result, ...arrResult)
    return result
}
console.log(interDeep(a, b))



