function showNumber(num) {
    console.log(num)
    if (true) {
        setTimeout(showNumber, 1000, ++num)
    }
}
setTimeout(showNumber, 5000, 1)