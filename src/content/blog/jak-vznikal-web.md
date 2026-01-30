---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JEH75WG%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T150336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZUViEj2bc4hZD3i9xkV5GvTDnVTLOwB%2F%2BoA%2BKyCmDIAiAzYVizZM6qqIPMd27zcLRg9VeXcqCjJ8LRWbhYAC2t2yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUfEJ%2BLfopITFmqvvKtwDorZ96MOOidbtawwmnsadue%2F8W%2FRqB7ytBYh4ctg1tQoxGK%2BYnUw58qPwxvSYP5tin0FpkJlQtuenkOeLUGch07o18UFeURxB2BbmKDE14Z1RJp4JDSAhJhsSQIxF4tn7ltAOhANuoRxCbXq%2FXs%2FAFmVO0wcIdASZHnBVBEuL6iH1V9eJmEBeAXCg4rUqDJPDPoY9IWmG1NExJDYamVhlP1i2A9nJVwiXO5ukWeqJ58odvTD5zVrUe7qIJ%2BAaJxfu3Cn45CWcRSrlIflBJpZSiJV6f1FrtarYJpgteP%2FCalsuLV%2BfQPphJi9w8RKx7eFLEMrz7t5TBnwwFAPLOJ12TulKfuDYntOY4dMI1jBCRwOQMjleEDlFpZxmC41To3vr8DG61axIVs4wlOFN5YMra4V1UKH4VGOnGHFg2LHvZ8Tk5O1AMP9euCy0NLe6EmcwhtNXdk4GE9lL8zklFhp1cP0r5kYhQIEcsnB4Z%2Bfxoxh87414sxZkp2ObT%2F%2FiMvZRHawDxrqr5P4C5E4%2BRuuQSXEPfMKVUtrz0lAHQxfQiy4pgMuuf9A80zelrazWpvG3%2BxGaPTQMmU6qdkOpe6ppIbuJJwhPljhBY6itKQY5FEJuu67LdqxxTPTa7Agwz5LyywY6pgEIe8GqiFzc7I3tj2pW1iQ34GcFSdiofIAtDksX%2B%2FeB4kbVO1ai%2FXJhkqcvl0OBhU25cqIbKOOa7j7wlkkD%2BXMwb%2BFY4jZEcgWuW9yk%2FHMQ%2BTFXTrs7w%2BDo91xZ7etbHcaWpkJsJBcU3WG1nJDehNhIwEMxRFhcbtTTlqnUa8OIZTduU02ZXjhBkodXRSu4cY5aY5fLMHDiiA6Ce2rKpY7iwD%2FIK0M%2F&X-Amz-Signature=6b0dba620936b6b44dd54700123e9b3963f7e812c94f26d245078363080ece3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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