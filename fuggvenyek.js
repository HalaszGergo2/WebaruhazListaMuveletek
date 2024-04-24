export function kosarbaRak(lista1, lista2, id) {
  lista2.push(lista1[id]);
 
}
export function torol(lista, id){
  lista.splice(id, 1)
}

export function szures(lista, keresoSzoveg){
  lista.filter(function(termek){
  return termek.marka.toUpperCase().includes(keresoSzoveg.toUpperCase())
})
}

export function rendez(lista, irany){
  lista.sort(function(t1,t2){
      let eredmeny = 1
      if(t1.marka < t2.marka){
          eredmeny = -1
      }
      return eredmeny*irany;
  })
  return lista
}