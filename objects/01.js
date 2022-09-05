// 01
// * Ожидаемый результат: True, если объект простой, иначе false. ({ a: 1 }) => истина, ([1, 2, 3]) => ложь

let obj1 = {
    name: 'Maksim',
}
function check(obj1) {
    let proverka = (typeof obj1 === 'object') ? 'true' : 'false' 
    console.log(proverka)
}
check(obj1);
