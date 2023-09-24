# Rendszerterv
Jelen dokumentum a rendszerterv mesterfájlja, de több ponton is hivatkozunk egyéb dokumentukra, illetve megeshet hogy a rendszerterv egyes részeit egy külön fájlban írjuk meg, ha ez logikusnak érződik

## Rendszer célja
A projekt célja egy egyszerű webes számológép kifejlesztése, amely lehetővé teszi a felhasználók számára a négy alapművelet (összeadás, kivonás, szorzás, osztás) végzését online böngészőjükben. 
A számológép további funkcióként memóriát kínál, amely csak regisztrált felhasználók számára elérhető, és legfeljebb 12 byte-on képes számokat tárolni. 
A számológép felhasználóbarát és intuitív felületet nyújt, ami segíti az egyszerű számítások végzését.

A rendszer céljainak (és nem céljainak) kimerítő listája [ide kattintva](https://github.com/martinsandor707/SZFMH10#a-rendszer-c%C3%A9ljai-%C3%A9s-nem-c%C3%A9ljai) megtekinthető, a funkcionális specifikáció részeként
a bejegyzést kezelheti az olvasó ennek meghosszabbításaként, mivel a célok leírásának általánosságából adódóan nincs gyakorlati különbség a megrendelő és a fejlesztőknek szánt verziók között.

## Projektterv
A projekt elkészítésében négy ember vesz részt, mi vagyunk
+ [Danka József Dániel](https://github.com/Xhepton)
+ [Lélek Hunor Kadosa](https://github.com/LHKadosa)
+ [Sándor Martin Tibor](https://github.com/martinsandor707)
+ [Tóth Kristóf Imre](https://github.com/kristof01124)

A projekt elkészítésére és teljes dokumentálására 3 hetünk van. A munka ***2023. 09. 04***-én vette kezdetét, a kész terméket pedig ***2023. 09. 25***-én kell bemutatnunk.

### Projekt szerepkörök, felelősségek
#### Szerepkörök
+ Javascript fejlesztő
+ UI designer
+ Adatbázis-szakértő
+ Site-Reliability Engineer (SRE)
#### Egyéb felelősségek
+ Scrum Master
+ Megrendelő/Felügyelő
+ Dokumentáció írása, rendszerezése

*(Megjegyzés: A Scrum Master szerepkört itt a lehető legbővebb értelemben kell venni, ugyanis távolról sem közelítjük meg egy valós cég csapatának koordináltságát. A gyakorlatban talán találóbb megnevezés lenne a koordinátor)*

### Projekt munkások és felelősségeik

+ Danka József Dániel
    + Javascript fejlesztő
    + Adatbázis-szakértő
    + Adatbázis implementáció
    + Dokumentáció írása, rendszerezése
+ Lélek Hunor Kadosa
    + Javascript fejlesztő
    + SRE
    + Model implementáció
    + Dokumentáció írása, rendszerezése
+ Sándor Martin Tibor
    + Javascript fejlesztő
    + Scrum Master
    + Controller implementáció
    + Dokumentáció írása, rendszerezése
+ Tóth Kristóf Imre
    + Javascript fejlesztő
    + UI design + implementáció
    + Elmélyült javascript tapasztalat megosztása a csapat többi tagjával
    + Dokumentáció írása, rendszerezése
 
Ezen felül egyetemi oktatónk Dr. Kusper Gábor tölti be a Megrendelői/felügyelői szerepet, ugyanis a projekt önmagán túlmutató célja az, hogy megtanuljuk alkalmazni a modern szoftverfejlesztési módszertanokat.
Tanár Úr felelőssége ennek megfelelően a projekt haladásának követése, és szükség esetén iránymutatás adása, majd a végeredmény elbírálása.

### Ütemterv
1. hét: Követelményspecifikáció + funkcionális specifikáció elkészítése
2. hét: Rendszerterv elkészítése
3. hét: Érdemi projekt elkészítése
4. hét: Projekt bemutatása

### Mérföldkövek:
1. Rendszerterv elkészülése. A projekt méretét tekintve az idáig való eljutás azt jelenti hogy nagyjából félúton vagyunk, ideje összeülni még utoljára összeülni és megbeszélni hogy ki mit és hogyan fog implementálni
2. Projekt elkészülése. Ideje bármiféle utolsó simítást elvégezni, majd Szeptember 25-én bemutatni a projektet.

## Üzleti folyamatok modellje
 1. Indulás:
A felhasználó betölti a webes számológépet, ami rácsatlakozik az adatbázisra

 2. Számítás:
A felhasználó megadja a számológépnek a kívánt matematikai műveletet, illetve a két számolandó számot.
Input tehát a művelet és a két szám.
Kimenet a művelet eredménye.
A művelet elvégzése előtt egy döntési pont során a webalkalmazás ellenőrzi a bemeneti adatok helyességét.

 3. Eredmény megjelenítése:
A webalkalmazás megjeleníti a számítás eredményét a felhasználó számára

 4. Eredmény mentése az adatbázisba:
A webalkalmazás az eredményt elmenti az adatbázisba a felhasználó azonosítója alapján, hogy nyomon követhessék a kiszámított műveleteket
A bemenet a felhasználó azonosítója, a művelet típusa, a számok és az eredmény.

 5. Vége:
A folyamat véget ér, és a felhasználó további műveleteket végezhet vagy kiléphet a programbol.

## Követelmények
### Funkcionális követelmények
A frontend elkészítéséhez a

+ HTML
+ CSS
+ Javascript

nyelveket használjuk, míg a backendhez ahol csak lehet Javascriptet.
A frontendnél részben a hagyományos számológép kinézetét igyekezzük emulálni, azonban a webes felületet kihasználva a számológép mellett megmutatjuk a regisztrált felhasználó history-ját,
azaz az adatbázisban az ő nevéhez szólóan elmentett üzenetek közül a legfrissebb 50-et.
Az előbb említett adatbázis egy SQL alapú relációs adatbázis lesz, aminek ER diagramja itt található:

![ER Diagram](https://github.com/martinsandor707/SZFMH10/blob/main/Rendszerterv/ER_Diagram.png)

Az adatbázis típusa és a táblák konkrét felépítése a fejlesztés során még változhat, ezért ezt a bekezdést a későbbiekben még frissítjük.
Az alkalmazás az Model-View-Controller (MVC) Architektúrát követi, és ehhez mérten osztjuk fel a felelősségeinket. További nem szakmai követelményleírásokat a funkcionális specifikációban lehet megtalálni, amit 
ebben a dokumentumban a "Rendszer céljai" fejezetnél be is linkeltünk.

### Nemfunkcionális követelmények
Mivel egyetemi példaprojektről van szó, így nyílvánvalóan nem valós adatokkal dolgozunk, így megelégszünk az alábbi szerény követelményekkel:

Futásidejű követelmények:
+ A felhasználók személyes adatait elég titkosítatlanul tárolni
+ Az alkalmazás ne tartalmazzon nyílvánvaló hibákat amik rosszindulatú használatra adnának lehetőséget akár a szerveren, akár a felhasználó gépén
+ Az alkalmazás kényelmes gyorsasággal reagáljon bármilyen tervezett funkció használatba vételekor

Evolúciós követelmények:
+ A fejlesztés során írt kódhoz tartozzon ésszerű mennyiségű egységteszt, legalább 80%-os kódlefedettséggel
+ SOLID alapelvek betartása
+ Interfacek interfacek interfacek

### Törvényi előírások, szabványok
A projektet soha nem szándékozzuk valós felhasználók kezébe adni, de ha mégis ez lenne a helyzet, akkor az európai GDPR lenne az adatkezelési irányadó.

## Funkcionális terv

## Fizikai környezet

## Absztrakt domain modell

Domainspecifikáció, fogalmak:
+ Felhasználók: Az alkalmazás felhasználói, akik használják a weben működő számológépet.
+ Webalkalmazás: A webalkalmazás, amely lehetővé teszi a felhasználók számára a számológép használatát.
+ Műveletek: Az alapműveletek (összeadás, kivonás, szorzás, osztás), amelyeket a felhasználók a számológépen elvégezhetnek.
+ Eredmények: A műveletek végrehajtásának eredményei.
+ Adatbázis: Az adatbázis, amelyben az alkalmazás minden felhasználó által kiszámolt műveletet elment.

Absztrakt komponensek, ezek kapcsolatai:
+ Kapcsolatok: A webalkalmazás kapcsolatot tart fenn a felhasználókkal és az adatbázissal. A felhasználók a műveletek végrehajtásához kommunikálnak a webalkalmazással, és az eredményeket az adatbázisban tárolják.
+ Működési elv: A webalkalmazás lehetővé teszi a felhasználók számára, hogy a műveletek típusát és számokat adjanak meg, majd elvégzi a kívánt műveletet és megjeleníti az eredményt. Az eredményeket az adatbázisban tárolják a felhasználó azonosítójával.
+ Adatáramlás: A felhasználók adatokat (műveletek típusa és számok) továbbítanak a webalkalmazásnak, amely végrehajtja a számításokat és eredményeket ad vissza. Az eredményeket az adatbázisba mentik.

## Architektúrális terv

## Adatbázisterv

## Implementációs terv

## Tesztterv

Célok és célkitűzések :

A számológépnek be kell tartania a matematikai szabályokat és a műveleteket pontosan el kell végeznie. Biztosítania kell, hogy az előre meghatározott maximális számjegy hosszú számok ne terheljék túl a memóriát és ne okozzanak hibákat. A felhasználói felület mindig valós időben kell a legfrissebb állapotot mutatnia. Az adatbázis pontosan kell tárolja és szükség esetén elmentenie illetve elküldenie a számítási előzményeket.

Tesztelendő funkciók és követelmények :

Szükséges tesztelni mind a 4 műveletet elvégző függvényeket. Ezeket kis és nagy számokkal, negatív értékekkel, null értékkel és nem számok esetében.
A felhasználói felületen minden gomb el kell küldje az aktuális számológép állapotot a controllernek, az tovább kell küldje az adatbázisba mentés céljára, illetve a funkcionalításnak számítási célokkal.Ezek után a controller visszakéri a funkcionalítástól az eredényt és ábrázolnia is kell a felületen. Az adatbázis vissza kell utasítson minden nem helyes formában megadott adatot

Tesztstratégia : 

+ A funkcionális tesztek a négy alapművelet helyes működését ellenőrzi, annak matematikai szabályainak helyes betartását.
+ A felhasználói felület tesztek a grafikus felület valós idejű és valós ábrázolást kell biztosítsanak, a gombok a hozzájuk tartozó eljárásokat kell elindítsák
+ A memória terhelése során ellenőrizzük, hogy a maximálisan megengedett számjegyeket képes-e eltárolni.
+ A kompatibilitás tesztek során ellenőrizzük hogy különböző böngészőkkel és különböző képfelbontással is működik minden funkció.
+ Tesztelésre unitteszteket és manuális teszteket fogunk használni. Manuálisan csak a különböző böngészőket és képfelbontásokat kell tesztelni, minden más tesztelendő funkciókat képesek leszünk unittesztekkel tesztelni.

## Telepítési terv

### 1. Nodejs Telepítése
#### Windows felületen
+ https://nodejs.org/en/download
#### Linux felületen
##### telepítés:
```
sudo apt install nodejs
```
##### ellenörzés:
```
node -v
```

### 2. Docker Desktop Telepítése:
https://www.docker.com/products/docker-desktop/
```
wsl --update
```

### 3. Setup
#### Projekthez szükséges package-k letöltése:
```
npm install
```
+ Docker-nek futnia kell a háttérben (akár vendégként)
```
docker run -d -p 4000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.3 start-dev
```
1. localhost:4000
2. admin console -> admin:admin
3. master->create realm->resource file beillesztése (json)

### 4. projekt futtatása
```
npm start
```
1. localhost:3000
2. bejelentkezés név:név (pl.: martin:martin)
3. számolj

## Karbantartási terv

### Karbantartási Folyamat
> + A fejlesztői és rendszerüzemeltető csapat havonta tart rendszeres értekezleteket, ahol rögzítik a várható karbantartási feladatokat és azok prioritását.
> + Az előre meghatározott időpontokban a rendszerkarbantartásért felelős csapat végzi a frissítéseket és az adatbázis karbantartását.
> + Felhasználói visszajelzéseket és hibajelentéseket rendszeresen ellenőrzünk, és a fejlesztési csapat azok alapján módosítja és javítja a szolgáltatást.

+ Célnyelv: Magyar vagy Angol
+ Operációs rendszer és szerver szoftverek frissítése:
    + Havonta egyszer
+ Víruskereső és biztonsági szoftverek frissítése:
    + Hetente egyszer
+ Szerverek ellenőrzése és tisztítása:
    + Hetente egyszer
+ Adatbázis rendszer teljesítményellenőrzése és optimalizálása:
    + Havonta egyszer
+ Adattároló eszközök rendszeres ellenőrzése:
    + Negyedévente egyszer
+ Felhasználói visszajelzések és hibajelentések elemzése:
    + Heti egyszer
+ Adatbázis biztonsági mentések készítése:
    + Hetente egyszer
+ Hibajavítások és új funkciók fejlesztése a felhasználói visszajelzések alapján:
    + Heti egyszer
+ A végrehajtott karbantartások eredményeit és esetleges problémákat dokumentálják.
### Biztonsági Mentés
+ Minden karbantartási tevékenység előtt automatikus biztonsági mentést készítünk a rendszer fontos adatairól,
  hogy a hibák esetén azokat vissza lehessen állítani.
### Dokumentáció és Jelentések
+ Minden karbantartási tevékenységről részletes dokumentációt készítünk, beleértve a végrehajtott feladatok leírását és a tapasztalt problémákat.
  Ezen információk alapján rendszeres jelentéseket készítünk a vezetőség számára.
### Ellenőrzés és Felülvizsgálat
+ A rendszerkarbantartás hatékonyságát és eredményeit rendszeresen ellenőrizzük és felülvizsgáljuk,
  és szükség esetén módosítjuk a tervet a javulás érdekében.

	
	
