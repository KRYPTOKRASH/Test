// 06-unique
// * Task description: Write a method that returns a duplicate-free array
// * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]


function unique(array) {
     let arrSet = new Set(array);
     return   Array.from(arrSet)
}

console.log(unique([1, 2, 3, 1, 2]))