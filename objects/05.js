// 05-is-equal
// * Task description: Write a method that makes a shallow compare of two objects
//  * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    a: 2,
    b: 2,
};
function check(obj1, obj2) {
    for (let key in obj1, obj2) {
        return key in obj1 == key in obj2 && obj1[key] == obj2[key] ? true : false
    }
}
const objCheck = check(obj1, obj2);
console.log(objCheck)