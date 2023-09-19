# SZFMH10
Simple calculator javascript

# Követelményspecifikáció

## Jelenlegi helyzet 
A tudományos kutatások kidolgozásánál megjelenő számítási műveletek elvégzésére papír illetve ceruza áll csupán rendelkezésre. A ceruzát minden használat előtt ki kell hegyezni, a papírt pedig leemelni a szekrény felső polcáról. A számítások során fejben vannak elvégezve a műveletek, esetleges piszkozat számítások felhasználásával. A műveletek elvégzését követően a kiszámolt eredmények az eredeti adatokkal együtt elkerülnek egy ellenőrző bizottsághoz akik ismételten kiszámolják a műveletekhez tartozó eredményeket. Amennyiben nincs eltérés az elsőnek számolt és az ellenőrzőbizottság álltal számolt eredmények között, a számítást sikeresnek tekinthetjük.

## Vágyálom rendszer 
A kutatások előrehaladtának felgyorsítása érdekében célunk egy autómatizált rendszert kialakítani ami szignifikánsan kevesebb embert igényel ugyan azon műveletek elvégzése és leellenőrzése érdekében. Ezt a két folyamatot egységesíteni kívánjuk egy applikációban. Egyetlen felhasználó akár 10 műveletet is eltudjon végezni 1 percen belül. Mindezt olyan módon, hogy az eredmények teljes mértékben helyesnek bizonyosuljanak és ne okozzanak tévedést a kutatás során.

## Eddigi funkciók
Semmi, a termék még nem létezik, de a jelenlegi helyzet mechanikus megoldása biztosítja az alábbi folyamatokat:
+ Nem létező, tehát a lehető legegyszerűbb kezelőfelület
+ Kézzel, mechanikus módon elvégzett számítások
+ Csökkentett hibázási lehetőség az ellenőrző bizottság jelenlétének hála
+ A felhasználó matematikai tudásához kötötten elvégezhető műveletek
+ Korábbi számítások visszakeresésének ineffektív módja idő és papír függvényében
+ Hosszadalmas ellenőrzési folyamat
+ Lehetséges szükségtelen fennakadások kutatók és az ellenőrző bizottság a probléma egyéni megközelítéséből fakadóan

## Tervezett funkciók

+ Egyszerű UI
+ Összeadás
+ Kivonás
+ Szorzás
+ Osztás
+ A felhasználó csupán a számok beírásával és kattintással képes legyen elvégezni a fenti műveleteket
+ A fenti műveletek hibátlan elvégzése feltéve, hogy a számok mérete nem haladja meg a rendszer kapacitását
+ Legfeljebb 12 bájt pontossággal számok ábrázolása, és velük műveletek elvégzése
+ Lehetőség a felhasználóknak regisztrációra extra funkciók eléréséhez
+ Regisztrált felhasználóknak korábbi számítások és eredményük elmentése gyorsítótárba 

## A rendszerre vonatkozó szabályok
- A web felület szabványos eszközökkel készül
  - html
  - css
  - javascript 
- A képek jpeg és png formátumúak lesznek.
- Személyes adatok védelme
  - Kötelező betartani az adatvédelmi szabályokat és jogszabályokat, mint például az európai GDPR-t

## Követelménylista
- Könnyen üzemeltethető rendszer
  - A rendszernek rendelkeznie kell egy felhasználóbarát grafikus felülettel vagy parancssori interfésszel, amely egyszerű és intuitív használatot tesz lehetővé anélkül, hogy a felhasználóknak részletes szakértelemre lenne szükségük.
- Használati útmutató
  - Felhasználóbarát leírásokkal és segítségnyújtással kell rendelkeznie, hogy a felhasználók könnyen megértsék a funkciókat és a használatot.
- Reszponzív dizájn ...
- Felhasználói hozzáférési jogosultságok kezelése
  - Biztosítani, hogy csak a megfelelő jogosultságokkal rendelkező felhasználók férhessenek hozzá bizonyos funkciókhoz vagy adatokhoz
  - Három szerepkör kezelése (admin, regisztrált, vendég)
    - admin
    - regisztrált
    - vendég
- Kompatibilitás és böngészőtámogatás
  - Az alkalmazásnak kompatibilisnek kell lennie a különböző webböngészőkkel, hogy minél szélesebb körű felhasználói bázist szolgálhasson ki.
- Hibakezelés és hibajelentés
  - Az alkalmazásnak képesnek kell lennie a hibákat kezelni és értesíteni a felhasználókat, ha probléma merül fel.
  - A hibákról való értesítéseknek informatívnak és hasznosnak kell lenniük a fejlesztők és az üzemeltetők számára.

## Fogalomszótár

- Művelet: Egy függvény, ami két számot képez egy számmá.
- Összeadás: A legalapvetőbb művelet az összeadás, amelyben a tagokat összeadandóknak míg az eredményt összegnek nevezzük. Az összeadás jele a + (plusz jel). 
  Az összeadás komutatív és asszociatív, vagyis a tagok felcserélhetők illetve csoportosíthatók.
- Kivonás: A kivonás az összeadás megfordítása. A kivonás jele a — (mínusz jel). Az $${\displaystyle a-b=c}$$ kifejezésben a a kisebbítendő, b a kivonandó és c a különbség.
  A kivonás se nem komutatív és se nem asszociatív.
- A szorzás vagy sokszorozás, a számtani alapműveletek egyike. A szorzás jele a x (kereszt) vagy · (pont). Az algebrában mindkettőt elhagyják, míg a programnyelvekben a jele a * (csillag). A tényezőket (tagokat) szorzónak illetve szorzandónak, míg az eredményt szorzatnak nevezzük.
  A szorzás komutatív $${\displaystyle a\cdot b=b\cdot a}$$, asszociatív $${\displaystyle (a\cdot b)\cdot c=a\cdot (b\cdot c)}$$ és disztributív az összeadásra illetve a kivonásra.
- Az osztás a szorzás fordítottja, melynek a jele a : (kettőspont) vagy tört formában kifejezve a — (törtjel). Az $${\displaystyle {\frac {a}{b}}=c}$$ kifejezésekben a az osztandó, b az osztó és c a hányados.
  Az osztás nem kommutatív és nem asszociatív, de jobbról disztributív az összeadásra és a kivonásra. 
- Magasabb rendű művelet: A műveletek sorrendjét határozza meg.
- Gomb: A GUI egy építőeleme, amivel interakcióba lehet lépni a számológéppel.
- Kijelző: A GUI egy építőelem, ahol a pillanatnyi számolás jelenik meg.
- Törlés: Egy művelet, amivel a számolás utolsó karakterét tudjuk eltűntetni.

# Funkcionális specifikáció

## A rendszer céljai és nem céljai

A rendszer célja egy egyszerű számológép funkcionalitásának megvalósítása webes felületen
Célunk az alábbiak biztosítása:
 + Egy egyszerű kezelőfelület
 + Alapműveletek:
     + Összeadás
     + Kivonás
     + Szorzás
     + Osztás
 + Regisztráció lehetősége a korábbi számolások későbbi megőrzéséhez
 + Egy adatbázis segítségével korábbi számolásokhoz hozzáférés
 + Műveletek végzése akár 12 számjegy hosszúságú számokkal

A rendszernek NEM célja az alábbiak biztosítása:
+ Bonyolultabb matematikai műveletek:
    + Hatványozás
    + Gyökvonás
    + Szumma
    + Produktum
+ Egyenletmegoldó algoritmus
+ Előfizetések regisztrált felhasználóknak
+ Kihalóban lévő állatfajok megmentése
+ Technológiai szingularitás elérése

## Használati esetek
- Adott műveletsor elvégzése matematikai szabályoknak megfelelően.
- Összeadás, kivonás, szorzás és osztás.
- Zárójelek használatának értelmezése.
- A számolási előzmény tárolása és megjelenítése.
- Ha esetleg hibásan ütötte be a felhasználó a számolást, akkor az utolsó karakter törlése.
- Ha a felhasználó rányom az = gombra, akkor a számológép kiértékeli a matematika kifejezést
  - Hiba esetén jelez
  - Helyes kifejezés esetén megadja az értéket
  - Ezek után a kifejezés értéke mentésre kerül a historyba
  - Minden egyes újraindítás után a history nullázódik

## Képernyőterv
- Egy tipikus számológép egy kijelzővel felül.
- 0-tól 9-ig a számok
- 4 alapművelet és az "=" jel
- Számolási előzmények jobb oldalt, folyamatosan frissül
- TODO: Kép, amikor már van kész gui xd

## Forgatókönyv

Egy tipikus folyamat amin a felhasználó végigmegy:
1. Weblap megnyitása
2. Bejelentkezés
3. History használatával kinyerni egy korábbi számolás eredményeit
4. Folytatni a számításokat
5. Két szám összeadása
6. Zárójelekkel prioritás egyértelműsítése
7. Összeszorzás egy harmadik számmal
8. "=" gomb megnyomása
9. Kifejezés kiértékelése
10. Használat folytatása meghatározatlan ideig
11. Kilépés

