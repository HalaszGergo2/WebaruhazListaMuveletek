export function kosarbaRak(lista1, lista2, id) {
  //végigmegyek a kosárlistán
  //ha az aktuális elem neve még nem  szerepel a kosárlistában
  //akkor az aktuális elemhez hozzáteszem  a db kulcsot  db=1
  //ha már a sazerepelt a kosárlistában, db++
  let aktTermek=lista1[id]
  /* keresés tétele  */
let index=0
  while (index < lista2.length &&  aktTermek.marka!== lista2[index].marka )
 {
  index++
 }
 if (index < lista2.length){
  lista1[id].db++
 }else{
      aktTermek.db=1
      lista2.push(aktTermek)
    }}

export function torol(lista, id) {
  lista.splice(id, 1);
}

export function szures(lista, keresoSzoveg) {
  let szurt = lista.filter(function (termek) {
    return termek.marka.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurt;
}

export function rendez(lista, irany) {
  lista.sort(function (t1, t2) {
    let eredmeny = 1;
    if (t1.marka < t2.marka) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function rendezAr(lista, irany){
  lista.sort(function(a1, a2){
    let eredmeny = 1;
    if(a1.ar < a2.ar){
      eredmeny = -1;
    }
    return eredmeny * irany;
  })
  return lista;
}
