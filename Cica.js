export default class Cica{
    /* új osztaély ami megemlití a cica adatait és a hozzátartozó valamilyen viselkedést egységbe zárjuk az adatokat és a hozzájuk tartozó
    adat-adattag
    viselkedés - cselekvéd - tagfüggvény
    
    az adattag lehet privát vagy publikus*/ 
    #obj = {} /* privát */
    
    constructor(obj={kep,nev}, szuloElem){
        
        /*this.kep = obj.kep;
        this.nev = obj.nev;*/
        //this.obj = obj; /* publikus */ 
        this.#obj = obj;
        this.szuloElem = szuloElem; /* publikus */
        this.megjelenit();
    }

    megjelenit(){
        /* az osztály tagfüggvénye az osztály adattagjain dolgozik */

        let kod = `
            <div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev} cica">
                <p>${this.#obj.nev}</p>
            </div>
        `
    this.szuloElem.innerHTML += kod;
}
    getObj(){
        /* getter, a privát adattagot adja vissza*/
        return this.#obj;
    }
}