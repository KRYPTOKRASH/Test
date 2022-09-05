// 03-without
// * Task description: Write a method that returns a new object without provided properties
//  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
let myObj = new Object();
  myObj.a = 1
  myObj.b = 2
function deleteElement(obj, value) {
  for (let i in obj) {
      if (obj.hasOwnProperty(value)) {
        Reflect.deleteProperty(obj, [value])
      }
    }
}  
deleteElement(myObj, 'b')
console.log(myObj)