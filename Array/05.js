// 05-without
// * Task description: Write a method that returns an array without listed values
// * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

function without(array, out) {
        let result = array
        for (let i = 0; i < out.length; i++) {
            result = result.filter(function(value) {
               return value !== out[i]
            })
        }
        return result
    }
let test = [1, 2, 3, 1, 2];
let out = [1, 2]
console.log(without(test, out))

