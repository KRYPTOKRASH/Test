// 05
//  * Ожидаемый результат: True, если объекты идентичны, false, если объекты разные ({a: 1, b: 1}, {a: 1, b: 1}) => true

let ob_1 = {
    a: 1,
    b: 2,
};
let ob_2 = {
    a: 1,
    b: 2,
};
function obCheck (ob_1, ob_2) {
    for (let key in ob_1, ob_2) {
        let res = (key in ob_1 == key in ob_2) ? 'True' : 'False'
        console.log(res)
    };
};
obCheck (ob_1, ob_2);