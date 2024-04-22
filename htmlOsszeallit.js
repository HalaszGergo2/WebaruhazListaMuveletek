export function htmlCardOsszeallit(lista){
    let txt = "<div class='row'>";
    for(let i = 0; i < lista.length; i++){
        txt += `
        <div class="col-lg-4 mb-4">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">${lista[i].marka}</h4>
                </div>
                <div class="card-body">
                    <img class="nagyit card-img-top" src="${lista[i].kep}" alt="polo">
                    <p class="card-text">${lista[i].nem}</p>
                </div>
                <div class="card-footer">
                    <p>Ár: ${lista[i].ar} Ft <button class="kosargomb btn btn-primary" style="float: right;">Kosárba</button></p>
                </div>
            </div>
        </div>`;
    }
    txt += "</div>";
    return txt;
}

export function htmlKosarOsszeallit(lista){
    let kosarLISTA = []
    const kosarGombELEM = $(".kosargomb")
    let txt = "<div class='row'>";
    txt += "<table class='table table-striped col-lg-4'>"
    txt += "<h1>Kosár:</h1>"
    txt += "<thead><tr><th>Márka:</th><th>Nem:</th><th>Ár(Ft):</th><th></th></tr></thead>"
    kosarGombELEM.on("click", function(){
        txt += "<tbody>"
    lista.forEach((elem, index) => {
        txt += `<tr>`
        for (const kulcs in elem) {
             txt += `<td>${elem[kulcs]}</td>`
        }
        txt +="<td>✏️</td>"
        txt +=`<td class='torol' id=${index}>🗑️</td>`
        
        txt += `</tr>`
    })
    
    });
    txt += "</tbody></table></div>"
    return txt
}

export function megjelenit(txt, divELEM){
    divELEM.html(txt);
}