export function htmlCardOsszeallit(lista) {
  let txt = "<div class='row'>";
  for (let i = 0; i < lista.length; i++) {
    txt += `
        <div class="col-lg-3 mb-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">${lista[i].marka}</h4>
                </div>
                <div class="card-body">
                    <img class="nagyit card-img-top" src="${lista[i].kep}" alt="polo">
                    
                </div>
                <div class="card-footer">
                <input type="radio" class="form-check-input" id="radio1" name="${lista[i].marka}" value="option1">
                <label class="form-check-label" for="radio1">S</label>
                <input type="radio" class="form-check-input" id="radio2" name="${lista[i].marka}" value="option2">
                <label class="form-check-label" for="radio2">M</label>
                <input type="radio" class="form-check-input" id="radio3" name="${lista[i].marka}" value="option3">
                <label class="form-check-label" for="radio3">L</label>
                <input type="radio" class="form-check-input" id="radio4" name="${lista[i].marka}" value="option4">
                <label class="form-check-label" for="radio4">XL</label>
                    <p>Ár: ${lista[i].ar} Ft <button id="t${i}" class="kosargomb btn btn-primary" style="float: right;">Kosárba</button></p>
                    
                </div>
            </div>
        </div>`;
  }
  txt += "</div>";
  return txt;
}

export function htmlKosarOsszeallit(lista) {
  let txt = "<div class='tabla row'>";
  txt += "<table class='table table-striped col-lg-4'>";
  txt += "<h1>Kosár:</h1>";
  txt +=
    "<thead><tr><th>Márka:</th><th>Nem:</th><th>Ár(Ft):</th><th>Db:</th></tr></thead>";
  txt += "<tbody>";
  let osszeg = 0;
  let db = 0;
  lista.forEach((elem, index) => {
    txt += `<tr>`;
    for (const kulcs in elem) {
      if (kulcs !== "kep") {
        txt += `<td>${elem[kulcs]}</td>`;
      }
      if (kulcs === "ar") {
        osszeg += parseInt(elem[kulcs]);
      }
    }
    txt += `<td class='torol' id=${"k" + index}>🗑️</td>`;

    txt += `</tr>`;
  });
  txt += "</tbody></table></div>";
  txt += "<div class='osszeggomb'>";
  txt += `<h2>Végösszeg: ${osszeg} Ft</h2>`;
  txt += "<button class='megvasarol'>Megvásárol</button>";
  txt += "</div>";
  return txt;
}

export function megjelenit(txt, divELEM) {
  divELEM.html(txt);
}
