function average(arr) {
    return arr.reduce((acc, i) => acc += i, 0) / arr.length
}