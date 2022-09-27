// 05-without
// * Task description: Write a method that returns an array without listed values
// * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

function without(array) {
    let res = [];
    for (i = 0; i <= array.length; i++) {
        for (j = i; j <= array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1)
                array.splice(i, 1)
            }
        }
    }
    return array
}

let test = [1, 2, 3, 1, 2];
console.log(without(test))











// for (i = 0; i < array.length; i++) {
//     let x;
//     if (array[i] !== ) {
//         arr.push(array[i+1])
//     }
// }

// let arrSet = new Set(array);
// return   Array.from(arrSet)
