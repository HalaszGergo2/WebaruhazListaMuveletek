Halász Gergő

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
