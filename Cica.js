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
        //this.#obj = obj;
        //this.szuloElem = szuloElem; /* publikus */
        this.megjelenit();

        this.buttonElem = document.querySelector(".kartya:last-child button");
        console.log(this.buttonElem);
        this.buttonElem.addEventListener("click", function(event){
            console.log(event.target);
        })
    }

    megjelenit(){
        /* az osztály tagfüggvénye az osztály adattagjain dolgozik */

        let kod = `
            <div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev} cica">
                <p>${this.#obj.nev}</p>
                <button>Kedvenc ${this.#obj.nev}</button>
            </div>
        `
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
}
    getObj(){
        /* getter, a privát adattagot adja vissza*/
        return this.#obj;
    }

    setObj(ertek){
        /* setternen keresztül módusítjuk az adattag értékeit ellenőrzést tudunk végezni mielőtt módosítjuk az adatot */
        if (ertek === "oltott"){
            this.#obj.oltott = true;
        }else if (ertek === "nem oltott") {
            this.#obj.oltott = false;
        }else {
            console.log("nem megfelelő az érték")
        }
        console.log(this.#obj)
    }
}