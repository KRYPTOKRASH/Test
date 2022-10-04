// 02-reverse
// * Task description: Write a method that reverts input array
// * Expected Result: [1, 2, 3] => [3, 2, 1]

function reverse (array) {
    let arr = [];
    for (i = -1; i <= array.length; i++){
    let x = array.pop();
    arr.push(x);
    }
    return arr
}

console.log(reverse([1, 2, 3]))