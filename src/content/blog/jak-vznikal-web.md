---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BHJEIOJ%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T114425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuz1Fmna%2BLQkAn5bVGSimnP6oa%2Blow%2FJ5yGDGqgNY3GAiBeqBfXjCaI1FfbrE0gs17ndbwRUogDFsL69zzlpvCboiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvkiwj%2BaiPdduzkNKtwD9LFZFXyMSho%2Bb2Mylv0%2BeQadPEZyRCO%2FCB2hw4PDT8lwYWvrVNznJZZWQ8DJGtejjP%2Bu19L5C0sfBXX1vbY%2FhU4E%2FVvfHYx%2BRjrkSgzZeZl6UoM4AuG4GhXpGKWrg2YCB5%2BShOk%2BgG1EovS7E6tzCvOW5vGrI9AqQA1HCFywxAZSamC4teysg5g2DvQ1gHINIeviMJ1MAk15V68U0m052XsWb8lMqxwrZLOaBl6UzIEsI%2F1P3GLF%2FqYrMlDG0vnEnRgCESgNP2T1DIqWh1IaCrG02FgNgTnO19kt2AveTdOF0zHCsSh%2BkgFgM0%2Bz8Z4hJrjxiOEUKBjqs1IE8tz5jscMxhVRQQ%2FBlTwZFaB4gR9VA0KW8xLnvzRvu6q6ccGp0UNQ4%2Boc2U60qF1Hb43rXejlozBmC784RpQa7%2Fy7wNy2V7g08CZ0wBOj7MEiYwUOXHwPHL6nMIx3VNlT2pBkj%2FaH%2BEUy5N0WxecCUVcGcUCD%2FVQZIM5iJ%2FXuQ%2BlhYKpi0WBc92LSYKBXZ2dTbsON9cuNvXPQZb978AqbEga4xP%2Fi5nB0UKJjun5Kep6neps2wCLYMJ61%2BlGupsQdyFpLt0zSuJRw2E2tvBak%2F4acFtAuNJaeI9jB%2BP%2FS27wwkMT3ywY6pgGQCGYJ%2B%2FoMb1Bf9pco5EnQOIw9peOdF2mxT1SKLpJtislXQzO4WHTfMp5K%2FQHpIhtFBXdp%2BfFlDbq07P2LENDzMlYT332HZMHng1mT0on4%2FZWCFDEWFu9SO8DUXpMt778HizlR7Tq5YjPIf%2F1RniXhvePXorBBxG1FO4%2F%2Fpz3w5XCR8WFZlEEqe9E%2B3PMx1atEPhlAhYLqewGbGFf2OxjiiAN9LyeM&X-Amz-Signature=3db74f7dc7eda7af4a9201bd6f94983b45c5b317d6a7e0b554d6d512054cddf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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