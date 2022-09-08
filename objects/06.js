// 06-вызов
//  * Описание задачи: Напишите метод, который вызывает метод массива по определенному пути.
//  * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]

// параметры функции = (объект - { a: { b: [1, 2, 3] } }, путь - 'a.b', метод, индекс + колво - [1, 2])

/*  switch (метод) {
case reduce: алгоритм действий - путь.reduce {
case splice: другой алгоритм дейтсивй
case filter
default: break
 */

let obj = {
    a: {
        b: [1, 2, 3]
    }
}


function check(obj) {
    let res;
    for (let globalKey in obj) {
        if (typeof obj[globalKey] === 'object') {
            let path = obj[globalKey]
            for (let key in obj[globalKey]) {
                res = (path[key].splice(1, 2))
            }
        }
    }
    return res;
}
const result = check(obj);
console.log(result)
