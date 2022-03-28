interface Zmogus { //kaip klasės, rašoma iš didžiosios raidės
    vardas: string,
    amzius: number,
    telefonas?: string, // "?" --> optional
    lytis?: string,
}

let apsilankymas = (lankytojas: Zmogus) => {
    console.log(`Pas mus apsilankė ${lankytojas.vardas}, jo amžius: ${lankytojas.amzius}`);
}

let paliko = (lankytojas: Zmogus) => {
    console.log(`Iš pastato išėjo ${lankytojas.vardas}, jo amžius: ${lankytojas.amzius}`);
}

let lankytojas = {
    vardas: 'Jonas',
    amzius: 29,
    telefonas: '861234567',
};


// console.log(lankytojas.amzius);

apsilankymas(lankytojas);
paliko(lankytojas);


/*2. užduotis

Sukurkite rodyklės (lambda) funkciją  metodą, kuriai paduotumėte tašką (interfeiso point objektą, turintį du kintamuosius x,y). 
Funkcija turi grąžinti atstumą nuo koordinačių pradžios taško (0,0) iki taško. 
Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).*/


interface Point {
    x: number,
    y: number,
}

let taskas: Point = { //sulinkinama su "Point", tam, kad būtų lankomasi "Point" taisyklių
    x: 5,
    y: 5,
}

let atstumas = (p: Point) => {

    let koordinaciuAtstumas: number
    koordinaciuAtstumas = Math.sqrt(p.x * p.x + p.y * p.y);

    return koordinaciuAtstumas
}

console.log('Atstumas tarp koordinačių:', atstumas(taskas));