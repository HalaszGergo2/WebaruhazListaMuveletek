export function htmlCardOsszeallit(lista){
    let txt= ""
    for(let i = 0; i < lista.length; i++){
        txt +=`
        <div class="col-sm-6">
        <div class="card">
                        
            <div class="card-header">
                <h4 class="card-title">${lista[i].marka}</h4>
            </div>
            <div class="card-body">
                <img class="card-img-top" src="${lista[i].kep}" alt="polo">
                <p class="card-text">${lista[i].nem}</p>
            </div>
            <div class="card-footer">
                <p>Ár: ${lista[i].ar} Ft <a href="#" class="btn btn-primary" style="float: right;">Kosárba</a></p>
                
            </div>
            </div>
        </div>`
    };
    return txt
}



export function megjelenit(txt, divELEM){
    divELEM.html(txt)
}