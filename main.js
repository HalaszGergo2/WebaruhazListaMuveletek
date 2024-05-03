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
alertEsemeny("Nincs semmi a kosaradban!");
export function init(tLISTA, kLISTA) {
  megjelenit(htmlCardOsszeallit(tLISTA), kartyaELEM);
  megjelenit(htmlKosarOsszeallit(kLISTA), kosarELEM);
  kosarbaRakEsemeny(tLISTA);
  torolEsemeny();
}
function kosarbaRakEsemeny(lista) {
  const kosarGOMB = $(".kosargomb");
  kosarGOMB.on("click", function (event) {
    let id = event.target.id.replace("t", "");
    console.log(id);
    kosarbaRak(lista, kosarLISTA, id);
    init(lista, kosarLISTA);
    alertEsemeny("Vásárlásod sikeres volt!");
  });
}

function torolEsemeny() {
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    let id = event.target.id.replace("k", "");
    torol(kosarLISTA, id);
    init(termekLISTA, kosarLISTA);
    alertEsemeny("Nincs semmi a kosaradban!");
  });
}

function rendezEsemeny() {
  const rendezELEM = $("select");
  let rLISTA = [];
  rendezELEM.on("change", function () {
    if (rendezELEM.val() == 0) {
      rLISTA = rendez(termekLISTA, 1);
    } else if (rendezELEM.val() == 1) {
      rLISTA = rendez(termekLISTA, -1);
    }
    init(rLISTA, kosarLISTA);
  });
}

function szuresEsemeny() {
  const keresELEM = $(".kereso");
  keresELEM.on("keyup", function () {
    let keresoSzoveg = keresELEM.val();
    const szurtLISTA = szures(termekLISTA, keresoSzoveg);
    console.log(szurtLISTA);
    console.log(termekLISTA);
    init(szurtLISTA, kosarLISTA);
  });
}

function alertEsemeny(uzenet) {
  const vasarolELEM = $(".megvasarol");
  vasarolELEM.on("click", function () {
    window.alert(uzenet);
  });
}
