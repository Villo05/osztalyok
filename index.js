/* jelenitsd meg a macskát az oldalon megjelenít metódus*/

import Cica from "./Cica.js";
import { megjelenit } from "./kartya.js";

const cica={
    kep:"kepek/cica.png",
    nev:"Princess"
}

const szuloElem = document.querySelector(".tarolo");

//megjelenit(cica,szuloElem);

const cat = new Cica(cica,szuloElem); /* példányosítom a Cica osztályt a példány neve "cat"*/
console.log(cat);
//cat.megjelenit();

console.log(cat.szuloElem);
console.log(cat.obj); /* az obj privát adattag, kívülről nem elérhető*/
console.log(cat.getObj()); /* getterrel el tudom Olvasni az értéket*/

const cica2 = {
    kep:"kepek/cica1.jpg",
    nev:"Gülü"
}

const cat2 = new Cica(cica2,szuloElem);