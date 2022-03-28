// // // function log(message) {
// // //     console.log(message)
// // // }
// // // log('Labas pasauli, yayy')

// // // var kiekis: number;
// // // kiekis = 5;
// // // kiekis = "Penki";

// // // var vardas;

// // // vardas = 'Donata';

// // // var vardasNaujas: string;

// // // vardasNaujas = (vardas as string)

// // let x: number = 10; //su kableliu arba sveikas
// // let vyras: boolean = false;
// // let vardas: string = "Donata";
// // let kazkas: any;

// // let temperatura: number[] = [1, 5, 12, 9];
// // let darbuotojuSarasas: string[] = ['Vepla', 'Kerepla'];

// // enum Spalva { Juoda, Balta, Geltona }; //enumeratorius
// // let dazai: Spalva = Spalva.Geltona;

// // let suma = (x: number, y: number) => { //jeigu nenurodom tipo, nebūtų klaidos, bet nurodžius, funkcijoje būtinai turime naudoti tą tipą
// //     // return x + y;
// //     let res: number;
// //     res = x + y;
// //     return res;
// // }

// // // let rezultatas: number = suma(8, 2);

// // // console.log(rezultatas);

// // console.log(suma(5, 8))

// let faktorialas = (n: number): number => {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }

//     return result
// }
// console.log("Skaičiaus 5 faktorialas:" + faktorialas(5));
// console.log("Skaičiaus 3 faktorialas:" + faktorialas(3));


/*1. užduotis

Sukurkite rodyklės (lambda) funkciją kuriai įvestumėte du skaičius ir kuri grąžintų tų skaičių bendrą didžiausią daliklį (BDD) 
Pvyzdžiui jei funkcijai paduodami kintamieji: n = 5, m = 3, tai f-ja turi grąžinti bdd = 
1. Išbandykite funkciją. Funkcijos kintamiesiems ir grąžinamoms reikšmėms nurodykite tipus.*/

let daliklis = (n: number, m: number): number => {

    let bdd: number;
    bdd = Math.max(m, n);


    for (let i = 1; i <= bdd; i++) {
        bdd--;

        if ((n % bdd == 0) && (m % bdd == 0)) {
            console.log('bdd:', bdd);
            return bdd
        }
    }
}

daliklis(20, 40)


