// 01-fill
// * Task description: Write a method that creates a new array with given values
// * Expected Result: (3, 'a') => ['a', 'a', 'a']

function nArray (number, string) {
    let arr  = [];
    let i = 0;
    while (i < number) {
        arr.push(string)
        i++
    }
    return arr;
}
console.log(nArray(3, 'a'))