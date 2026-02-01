---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIZBD4C%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T175202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEsYRiLcs8QbFiNmQeaUBq8aYu5d2YtVbyOzBxROXPXQAiEAu7L3WxftzBHrvVpJp53cUFuLx6UVY1qoN%2BLIm8jRey0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO9CmI5iRx9uMY1%2BSrcA3uLfjeyjIqbzuxmV5J6fDKaviKi684As3LKNoFl%2FLpUxkqkcD%2F1rjp%2FW%2BN5090mgyAjaa8x3cwAlBNKR8h0kdtVZM2R246664mJqpHEpjptKzUVEv4HOg68vR50Mz8GPhj92ADbrIV1424DKDgLA%2FTlgTMs9xresSrQa5W9bCwh88523BvQIW56OwZsDIcBrRpo5cnMHds9BlCq%2BxWJFNdKoYAfp%2FnBsYSA0Qf72aFsin%2BMkM9%2FLMsuhA2RsaG4ZrLLUQhuLhFowvTpzExNUEH47buxaonIR5CAcCjfwl9EPyqKH8JXAqQu%2BYENVnmx%2FSFW4MlCetGFWbziDHmg285IqAg7HR5UMsDZ6BQXLTkl6oxJ4WBWau3CggJb0hEE%2FzxqQ0R10ILrQzBOD3i3fhxM%2F5DpRYIUl3QJTc002cDeMIcckvbgXDQSbcSYi9sQyZDNNIGpFnOBCqCEJqn4DirsaW%2BMDWvERIG1CkGP6E69gRq4g4JUx%2F%2BilKClwbzJz7Q76RtR1L%2FvNpgNntMaD67PR5GnasfWn4XqG%2Fuox8QX0JnH3x2vDHCQS%2F99OnTS3yllKR24Wyy3xA49Lkb1EoUurcDhuk%2FP6fAtFl%2BrpbVVA3lpB3INfhUYC3IBMLeO%2FssGOqUBRkfKBTF82MhO6UC2dMEOU10PbbqWHJIudRH1z1sX9r3D9s8tY2LWyzV1wFI3o9Cr4%2BEWdc2g9Kj7EJWoFWTKjVRLMzihzNU9nj0ALIl4%2FB4gGREr6dgY4aMIQt%2BrA9C2kiE0Y7bkqiSBrGGcXz5hvRrj0hTmoiWJN0GYqoOOxdBA5xqWIL9OnGLX0OPbSYM9t3U1ir8%2Bsv0AxGdbHr3pzvm4%2FiOp&X-Amz-Signature=bf6b466e5c450f0c7e8d018ef4d08d61ffa672bb0f0513168bd5e07498549f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
seoTitle: ""
seoDescription: ""
---

Tento web nevznikl jako hotová šablona za jedno odpoledne, ale jako výsledek postupného a iterativního procesu s cílem vytvořit funkční, udržitelný a dlouhodobě rozšiřitelný nástroj. Hlavní filozofií bylo, že technologie mají sloužit obsahu, nikoliv se předvádět, a že web není cíl, ale nástroj.

Zde je podrobný přehled postupu, použitých technologií a ponaučení z vývoje:

### 1. Strategie: Nejdřív obsah, pak technologie

Úplně na začátku nestál framework, ale otázka, co má web vlastně dělat. Cílem byla prezentace projektů, přehledná timeline a blog. Zásadním rozhodnutím bylo, že obsah musí jít psát přirozeně, ideálně v Notionu, bez nutnosti sahat do kódu při každém novém článku.

### 2. Zvolený technologický stack

Pro realizaci byla vybrána kombinace, která sází na rychlost a jednoduchost:

- Astro: Zvoleno pro generování statického webu, který je rychlý, levný na provoz a bez zbytečné „magie“ nebo JavaScriptového balastu.

- Tailwind CSS: Použit pro layout a typografii s cílem udržet konzistentní design, ale bez „utility class hell“ – tedy s důrazem na čitelnost kódu.

- Notion: Slouží jako redakční systém (CMS). Články se píší v Notionu, odkud se pomocí skriptu exportují do Markdownu a validují přes Astro Content Collections.

### 3. Design a uživatelská zkušenost (UX)

Cílem byl prémiový „editorial“ vzhled, nikoliv klasický blog z roku 2018.

- Hero sekce: První dojem tvoří jemné animace, ambientní světlo a gradientní text. Technickým ponaučením bylo, že gradienty patří do vnitřních prvků (span), zatímco animace na obalové elementy, aby nedocházelo k vizuálním chybám.

- Projekty a blog: Sekce projektů byla pojata jako horizontální carousel s jemnými maskami na okrajích a šipkami místo scrollbarů. Pro přehled článků byl nakonec zvolen formát „jeden řádek = jeden článek“ s důrazem na silný titulek, což působí více magazínově než klasický grid karet.

- Detaily, které dělají rozdíl: Pro zvýšení kvality byly přidány prvky jako scroll progress bar, odhadovaná doba čtení a ikony sociálních sítí (Tabler Icons) vložené jako inline SVG pro plnou kontrolu nad vzhledem.

### 4. Technické výzvy a „porodní bolesti“

I když byl plán jasný, realita přinesla několik komplikací:

- Notion Sync a tagy: Objevil se problém, kdy se všechny tagy zobrazovaly jako „ostatní“. Příčinou byl nesoulad mezi typem pole v Notionu (Select vs. Multi-select) a očekáváním skriptu. Řešením bylo přestat vymýšlet fallbacky a zobrazovat přesně to, co je v datech.

- Deploy a Git: Během nasazování se stalo, že web i po buildu ukazoval starý vzhled. Problém byl v nejednotné lokální kopii projektu a špatně commitnutém kódu. Ponaučením je, že Git je skvělý sluha, ale nemilosrdný pán.

- Vizuální ladění: Design se ladil tak dlouho, dokud „nepřestal bolet oči“, nikoliv dokud nebyl co nejefektnější. Ukázalo se, že méně animací znamená více důvěryhodnosti.

### 5. Závěr a co dál

Aktuálně je web postavený na pevných základech: má funkční automatický build a deploy, obsah se snadno spravuje přes Notion a design je klidný a čitelný. Dalším krokem je ladění jemné typografie, rytmu textu a mikrointerakcí.

Hlavní ponaučení z celého procesu:

1. Architektura je důležitější než efekty.

1. Konzistence vítězí nad originalitou za každou cenu.

1. Web není hotový projekt, ale neustálý proces.