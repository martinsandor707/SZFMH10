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

## Karbantartási terv
