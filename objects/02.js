// 02-make-pairs
// * Task description: Write a method that returns a deep array like [[key, value]]
//  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

let obj = {
    name: 'ya',
    address: {
      street: 1905,
      city: 'Moscow'
    }
};

function check(obj) {
    let arr = []
    for (let globalKey in obj) {
        if (typeof obj[globalKey] === 'object') {
            for (let key in obj[globalKey]) {
                let result = [];
                result.push(key);
                result.push(obj.address[key]);
                arr.push(result); 
            }
        }
    }
    return arr;
}
const result = check(obj);
console.log(result)