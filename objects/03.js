// 03
// * Ожидаемый результат: ({a: 1, b: 2}, 'b') => {a: 1}

function deleteElement(obj3, value) {
    for (let i in obj3) {
      if (obj3.hasOwnProperty(value)) {
        Reflect.deleteProperty(obj3, [value])
      }
    }
}

  let myObj = new Object();
  myObj.a = 1
  myObj.b = 2
  
  deleteElement(myObj, 'b')
  console.log(myObj)