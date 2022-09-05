// 01-is-plain-object
//  * Task description: Write a method that verifies an argument is a plain object, not an array or null
//  * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false

let obj = {
    name: 'Maksim',
}
function check(obj) {
    let result = (typeof obj === 'object') ? 'true' : 'false' 
    return result;
};
const functionResult = check(obj);
console.log(functionResult)