---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKMDBUG%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T064045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsMj2nHvjTvloOAKcrJt6cSNBiW0RwYPRmk8vUIbpqtQIgGW6UUdcvCMSwKlu5HykLNaPG02nH55%2FDWmxjHb74Mxsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO2OtnapWtHYo6eeryrcAy9gmbL2EBLjO9Elz1mNyYk6a0C43IsTtHtYkRwQHnBe0gw%2FGlugeHrV2StCY74PWgqm3IfBrgW6%2FKjr141I9DhEgcjbZPygzJO8AkZjjlWY65sp%2FGDaViWfiMAlT1FP0jJyS%2BuJ7xn%2Fz3leNFnNCJ20raFgFEh925uYSwZqtOK49ukXQIfuxckanw3djX1lcLxDa87JA1pCMh5lVw9Yr9goOTLF2cqx5LYSVxGSV9f%2FM%2BKFcaLnFP572J%2FeoVMbiD2ekS6LYtIJ45YwInVWmdrKInCDNMGAUmWqJ%2FnHR%2Bo0gyIveukfJBAx7Zkix5PYJsm6nBUTV2ZqUuHfjcXVu33%2Bq0Ifs5LKlNhq4ydmZD1aMXlWCoT7SuC1bPoTiCxi0tuOlBuz55B865bKILJ4IgL2N4gjZo%2FGUJGiD4On2%2FLcks0tG6p56erP%2BdLKQ2HP0BoNCk7isrEC5fOzOq2oAlRIFHKkfIYmpS725daCvPyjObHmQ9mwEwcyA%2FkSU2C9%2FvMhd6Lsu6xqofUFfAjxbshQ3KgeR3l2TvdH%2Bu6gqUxJWRFEniqZG7rEdWTBi0ki4twLcuxrx8hyfR5jwDNcZ5dRB4cU5ZNSZeRxGE3SWdEx2yxYDZjFx%2FIUgxBZMJ7n68sGOqUB2cEHgCz5l62aPMZ2AfrLyqpkuYMErsRY497lpWQKJ%2FWfdbOPuugPYFutH%2FeXrEs62I1wZOnMLNJiBa1%2BMsWRr%2BMHM0%2FlPtr0jo%2B5TNWSRmMtN5tvYJnM%2BwJK7y8JhsmZHHl5gk76EVWnq8jPttGAWze4mg6htFNSyH5YWJlG2F3NA3cWM8e3KLZtljD3O2%2FEcnORbl6k4i640sw5WTDRb%2BeVO2gO&X-Amz-Signature=4684710aa4e6c06efde87832b7225c6cc7168e007c6347f2a91b81975b8ff748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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