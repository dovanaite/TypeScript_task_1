var apsilankymas = function (lankytojas) {
    console.log("Pas mus apsilank\u0117 ".concat(lankytojas.vardas, ", jo am\u017Eius: ").concat(lankytojas.amzius));
};
var paliko = function (lankytojas) {
    console.log("I\u0161 pastato i\u0161\u0117jo ".concat(lankytojas.vardas, ", jo am\u017Eius: ").concat(lankytojas.amzius));
};
var lankytojas = {
    vardas: 'Jonas',
    amzius: 29,
    telefonas: '861234567'
};
// console.log(lankytojas.amzius);
apsilankymas(lankytojas);
paliko(lankytojas);
var taskas = {
    x: 5,
    y: 5
};
var atstumas = function (p) {
    var koordinaciuAtstumas;
    koordinaciuAtstumas = Math.sqrt(p.x * p.x + p.y * p.y);
    return koordinaciuAtstumas;
};
console.log('Atstumas tarp koordinačių:', atstumas(taskas));
