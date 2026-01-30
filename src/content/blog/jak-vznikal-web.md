---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPUFJZH%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T203410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtn0%2F9lcxeCe9cUbkubtLBqZpygLaP5em3hVpVPs%2F6iAiASMgHSLpPCV%2FdlWFl%2F2cx8V3YCwvkxHU6XXdwZ%2F8bpdyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdCmjK71%2FQ53UqE7HKtwDkgkg6Q5fCqXzNWl1pTx%2BiF6FkaZRO6a8dWgm1mitM94pdGanBy44v5EbeN26vTaPbhCNsENnlw%2BT4WsV%2B7jQRiVAiJ3iAwbbsBcF8mp3POijgZD7bfsFQ%2FLLa5MoOdKMaTnTk6%2BcrFUgnxXvFBq7SObAWIYA8KDIWMFBL5m0ct7wDOeovIV6pHqvI5TEEB45qr3swcUn8WM6uLpfEU9VU4u%2F2QA4ZRp4d78RjQgc9nWyp7hMV%2B5rKTqtKIWbCcFfArxnLW2MVNZBSBAGiVHWbfuHsH6wY3zHu1mmM1Ip%2FNDfg5BFCtLZLU9QSEUQ0s9vcMal%2BDhPO%2FBixlPK8ouDbNIL9hmu7UgGZ3Kpt8j33u%2B36q9nGKrdPcMJbtMatCs6p85ENYk%2BBMTGsoaFV8z3UBAWQWOvkE593EK0sTL490WBtWbl61EC66a9Bby%2B0K14Qet7k2f3ksMDRsxPaXU9skTf1t5uMsCi2Ap89jDntThOwLKBna%2FcWnHudjlGnFNjt1aC2fGcn6MmA7pNmmxeDtLQeUP7S5BLtnwCjJpXcMxx%2BmGA4YQCyd26iOn9r9RvJ9sPtNv2Zrn9Tqk%2Fxv%2BaV9K1pa88Yg63%2FGvqUWxRpDtvtTJwD51QPJlbeDkw4If0ywY6pgHKibKbGOGMZ5cfeT5n%2F%2By0FLc7HreXEoEcTV8Zlpc3f9tHnJVmyaoJhse19Rq%2F6fJ9tNzGL1SE5%2FfOzUQaKntycDxa0lMWhbF0bxZB6CNWk6aWOEqcj9nkbFHFlCXkQ1r8xxWI61RfB0OdbZknjsIXsbE%2Bu%2Bmkp%2BqpPkfYY1%2F4nuXmV4zPMdsfr%2F7y%2F72c87vbql1ceBYqS4vsSG494dXBzWvpOuDh&X-Amz-Signature=89ce8194a005571233f96a8404616d5d83c168a5893d133555df3b7e1eac0e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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