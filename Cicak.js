/* végig megy a listán és példányosítja  a Cicát annyiszr ahány eleme van a listának*/

import Cica from "./Cica.js";

export default class Cicak{
    #lista = [];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }
    megjelenit(){
        this.#lista.forEach((elem, index) => {
            new Cica(elem, index, this.szuloElem);
        });
    }
}