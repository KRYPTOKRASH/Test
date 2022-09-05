// 02 
//  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
let obj = {
    name: 'ya',
    address: {
      street: 1905,
      city: 'Moscow'
    }
};
let arr1 = [];
function checkInObj(obj) {
    for (let globalKey in obj) {
        if (typeof obj[globalKey] === 'object') {
            for (let key in obj[globalKey]) {
                let result = [];
                result.push(key);
                result.push(obj.address[key]);
                arr1.push(result); 
            }
        }
    }
}
checkInObj(obj);
console.log(arr1)