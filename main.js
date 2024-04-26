import { termekLISTA } from "./adat.js";
import {
  htmlCardOsszeallit,
  htmlKosarOsszeallit,
  megjelenit,
} from "./htmlOsszeallit.js";
import { kosarbaRak, torol, szures, rendez } from "./fuggvenyek.js";

const kartyaELEM = $(".kartyak");
const kosarELEM = $(".kosar");
const kosarLISTA = [];
init(termekLISTA, kosarLISTA);
szuresEsemeny();
rendezEsemeny();
export function init(termekLISTA, kosarLISTA) {
  megjelenit(htmlCardOsszeallit(termekLISTA), kartyaELEM);
  megjelenit(htmlKosarOsszeallit(kosarLISTA), kosarELEM);
  kosarbaRakEsemeny();
  rendezEsemeny();
  torolEsemeny();
}
function kosarbaRakEsemeny() {
  const kosarGOMB = $(".kosargomb");
  kosarGOMB.on("click", function (event) {
    let id = event.target.id;
    kosarbaRak(termekLISTA, kosarLISTA, id);
    console.log(kosarLISTA);
    init(termekLISTA, kosarLISTA);
  });
}

function torolEsemeny() {
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    torol(kosarLISTA, id);
    init(termekLISTA, kosarLISTA);
  });
}

function rendezEsemeny() {
  const rendezELEM = $("select");
  let rLISTA = [];
  rendezELEM.on("change", function () {
    console.log(rendezELEM.val());
    if (rendezELEM.val() == 0) {
      rLISTA = rendez(termekLISTA, -1);
    } else if (rendezELEM.val() == 1) {
      rLISTA = rendez(termekLISTA, 1);
    }
    console.log(rLISTA)
    init(rLISTA)
    
  });
  
}

function szuresEsemeny() {
  const keresELEM = $(".kereso");
  keresELEM.on("keyup", function () {
    let keresoSzoveg = keresELEM.val();
    console.log(keresELEM);
    console.log(keresoSzoveg);
    const szurtLISTA = szures(termekLISTA, keresoSzoveg);
    console.log(szurtLISTA);
    init(szurtLISTA);
  });
}

init(termekLISTA, kosarLISTA);
