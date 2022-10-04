function fib(n) {
    let fInt = 1;
    let sInt = 1;
    for (let i = 3; i <= n; i++) {
        let fibInt = fInt + sInt
        fInt = sInt
        sInt = fibInt
    }
    return sInt
}

console.log(fib(9))