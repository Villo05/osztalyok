export function megjelenit(obj = {kep,nev},szuloElem){
        let kod = `
            <div class="kartya">
                <img src="${obj.kep}" alt="${obj.nev} cica">
                <p>${obj.nev}</p>
            </div>
        `
    szuloElem.innerHTML = kod;
}

/* 
viselkedes
cicát kedvencnek akarom jelölni
időpontot foglalni kozmetikushoz
kiválasztani gazdát
mozgatni szeretném
 */