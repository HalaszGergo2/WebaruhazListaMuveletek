import { termekLISTA } from "./adat.js";
import { htmlCardOsszeallit, htmlKosarOsszeallit, megjelenit } from "./htmlOsszeallit.js";
const kartyaELEM = $(".kartyak")
const kosarELEM = $(".kosar")
init(termekLISTA)
export function init(lista){
    megjelenit(htmlCardOsszeallit(termekLISTA), kartyaELEM)
    megjelenit(htmlKosarOsszeallit(termekLISTA), kosarELEM)
    torol(termekLISTA, )
}
  


   function torol(lista, id){
    const torolGOMB = $(".torol")
    torolGOMB.on("click", function(event){
    let id = event.target.id
    const lista=torol(termekLISTA, id)
    init(lista)
   })}



   
   init(termekLISTA)
