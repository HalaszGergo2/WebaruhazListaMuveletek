import { termekLISTA } from "./adat.js";
import {
  htmlCardOsszeallit,
  htmlKosarOsszeallit,
  megjelenit,
} from "./htmlOsszeallit.js";
import { kosarbaRak, torol, szures } from "./fuggvenyek.js";

const kartyaELEM = $(".kartyak");
const kosarELEM = $(".kosar");
const kosarLISTA = [];
let irany = 1;
init(termekLISTA);
init(kosarLISTA);
szuresEsemeny();
export function init(lista) {
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
    init();
  });
}

function torolEsemeny() {
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    torol(kosarLISTA, id);
    init();
  });
}

function rendezEsemeny(){
  const nevELEM=$("select").eq(1)
  nevELEM.on("click", function(){
      const rLISTA = rendez(termekLISTA, irany)
      console.log(rLISTA)
      init(rLISTA)
      irany*=(-1)
})
}

function szuresEsemeny() {
  const keresELEM = $(".kereso");
  keresELEM.on("keyup", function () {
    let keresoSzoveg = keresELEM.val();
    const szurtLISTA = szures(termekLISTA, keresoSzoveg);
    init(szurtLISTA);
  });
}

init(termekLISTA);
