import { termekLISTA } from "./adat.js";
import {
  htmlCardOsszeallit,
  htmlKosarOsszeallit,
  megjelenit,
} from "./htmlOsszeallit.js";
import { kosarbaRak, torol } from "./fuggvenyek.js";

const kartyaELEM = $(".kartyak");
const kosarELEM = $(".kosar");
const kosarLISTA = [];
init(termekLISTA);
init(kosarLISTA)
export function init(lista) {
  megjelenit(htmlCardOsszeallit(termekLISTA), kartyaELEM);
  megjelenit(htmlKosarOsszeallit(kosarLISTA), kosarELEM);
  kosarbaRakEsemeny();
  torolEsemeny()
}
function kosarbaRakEsemeny() {
  const kosarGOMB = $(".kosargomb");
  kosarGOMB.on("click", function (event) {
    let id = event.target.id;
    kosarbaRak(termekLISTA, kosarLISTA, id);
    console.log(kosarLISTA)
    init()
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

init(termekLISTA);
