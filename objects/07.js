// 07-пусто-глубоко
// * Описание задачи: Написать метод, который выполняет глубокую проверку, является ли объект пустым
// * Пустые значения: '', null, NaN, undefined, [], {}
 let obj = {
     a: '',
     b: null,
     c: NaN,
     d: undefined,
     e: [],
     f: {},
 }
function check(obj) {
    for (let globalKey in obj) {
        //if (typeof obj[globalKey] === 'object') {
            let path = obj[globalKey]
            for (let key in obj[globalKey]) {
                return false
            }
        }
        return true

}
let result = check(obj)
console.log(result)



//
// function check1(obj) {
//     for (let key in obj) {
//             console.log(obj[key] == undefined)
//             console.log(obj[key] == '')
//             console.log(obj[key] == null)
//             console.log(obj[key] == NaN)
//             console.log(obj[key] == [])
//             console.log(obj[key] == {})
//     }
// }
//
// check1(obj)

