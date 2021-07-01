var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

var output = angka.filter(function batas(x) {
    return x > 10;
})

console.log("Sebelumnya : " + angka.toString());
console.log("Ascending  : " + angka.sort().toString());
console.log("Descending : " + angka.reverse().toString());
console.log("Filter > 10: " + output.sort().reverse().toString())