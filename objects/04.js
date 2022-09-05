// 04-is-empty
// * Task description: Write a method that makes a shallow check is object empty
//  * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false

function checkObj(obj) {
    if (Object.keys(obj).length === 0) {
          console.log(true)
    } 
    for (let a in obj) {
        if (obj[a] === undefined) {
            console.log(true)
        } else { 
            console.log(false) 
        }
    }
}

let someObj = {};
let someObj2 = {a: undefined};
let someObj3 = {a: 1};

checkObj(someObj);
checkObj(someObj2);
checkObj(someObj3);