//   04 
// * Ожидаемый результат: ({}) => истина, ({a: undefined}) => истина, ({a: 1}) => ложь
function checkObj(obj) {
    if (Object.keys(obj).length === 0) {
          console.log("TRUE")
    } 
    for (let a in obj) {
        if (obj[a] === undefined) {
            console.log("TRUE")
        } else { console.log("FALSE") }
    }
}

let someObj = {}
let someObj2 = {a: undefined}
let someObj3 = {a: 1}

checkObj(someObj)
checkObj(someObj2)
checkObj(someObj3)