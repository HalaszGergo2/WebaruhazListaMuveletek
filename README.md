
# TeeTopia Webáruház
## Halász Gergő

### Specifikáció: 
Készíts "webáruházat" tetszőleges témában. 

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A formázáshoz bootstrap-et használj! A design eltérhet a képen látottól!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!
PUBLIKUS FELÜLET 
A publikus felületen div-ekben jelenítsük meg az adatokat. (az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
++ Lehet, hogy szükséged lesz a localStorage használatára. 
++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

### Függvények: 

htmlCardOsszeallit(lista)
visszatérési értéke egy txt lesz.
Ez összeállít egy termék card-ot divekkel, tulajdonságokkal.

termekLISTA = ["adatok"]

htmlKosarOsszeallit(lista)
visszatérési értéke egy txt lesz.
Ez összeállítja a kosár táblázatot a saját divében, a kiválasztott termék tulajdonságaival.

kosarLISTA = ["elején üres"]

megjelenit(txt, divELEM)
Megjeleníti egy megfogott div elemben a html összeállít függvényeknek a visszatérési értékét.

kosarbaRak(kosarLISTA, termekLISTA, id)
visszatérési értéke a kosár lista lesz.
Ez a termékek listából a kiválasztott terméket hozzáadja a kosár listához .
Akkor fut le ha a "Megvásárol" gombra kattintunk.

kosarbolTorol(lista, id)
visszatérési értéke a kosár lista lesz.
Ez a kosár listából kitörli a kiválasztott terméket splice segítségével.
Akkor fut le ha a kuka ikonra nyomunk.

kosaratModosit(lista, id)
visszatérési értéke a kosár lista lesz.
Ez a kosár lista egy elemének fogja módosítani a mennyiségét.
Akkor fut le kosár db számot változtatjuk.

arRendezes()
visszatérési értéke a termék lista lesz
sort segítségével megrendezi a termékeket feltétel szerint.
Akkor fut le ha a le/fel nyilra kattintunk.

szures()
visszatérési értéke a termék lista lesz
filter segítségével megszűri a termékeket egy keresőszó segítségével.
visszatérési értéke a lista lesz
