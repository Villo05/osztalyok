/* jelenitsd meg a macskát az oldalon megjelenít metódus*/

import { CICALISTA } from "./adat.js";
import Cicak from "./Cicak.js";

const szuloElem = document.querySelector(".tarolo");
const kedvencElem = document.querySelector(".kedvenc");

new Cicak(CICALISTA, szuloElem)

const KEDVENCLISTA = [];
/* a kiválasztottt cica adatait akarom itt megjeleníteni */ 
window.addEventListener("kedvenc", function(event){
    /* feliratkozom a saját eseményemre*/
    console.log(event.detail);
    KEDVENCLISTA.push(CICALISTA[event.detail]);
    new Cicak(KEDVENCLISTA, kedvencElem)
})
