---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDSUOZB%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXjaDSa5bXSQ4XZNubpVGXQR%2FnhCnvzxXKMlkbR%2BYNQIhAMpNpPtsoLrduabXaR0B4UylB4TUPts%2FbujI%2B5WeG%2F%2BaKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykw5MxCV8zmmcKCacq3ANc2knafVb91MqqrtqRLsw1WvxNYkBC8EFX%2FfPBoohJHhG78qO70g8I3DUtogi7%2Fg%2FPL%2B%2BRz8vA2%2BoQLhioluSKewdjM420gSSXcDH%2BYME4IsbRMVNxKEbaRFoyJMU5JlDpbLXhhfXM95lYYxquA2YjQcR9JopkpT02tlfZSrt7ZHJe%2F%2BCWx0fEb6DN7Qh1TG%2F4EaZJfuDJifYa9lPv3Jk456yhFNyE5AEtb259ovETz6cuXNTyWQHOKIjzwlRJhG6XXJ5Cnfmh%2FA%2Fs1LlpASayDqQjlTCaaORKaVfXc3O8HyZzXE4r1b5lQBfu%2BZQnavSlcV4qeLJ89O6Xp5brA5Vwijs5pSbZTuGhdzVQDiK%2F%2BogVWGukx0oiC7ZTBTtLLYU8g3wZykQ4aqlkELLIhck1%2BDaBPc4Vy8jgxyDedervdPRg29MlGDABHVxMW5BMVz2VtQAMuO3rxoayQJp4lG2kmh5QGbQAiNs64%2F%2BFikhX8adAhIL57s3XLtTESHpgIzfAOPXHnvuc1sK5NyWQwHIAj4TDeKnU5dT%2F7n1xZF5xJP63FDrK%2B%2FdaqX2ERkc7eyxf%2BzdqaeJMTUaNRGVvw%2BsLYOi54nH%2FPN5rpwUvTjFf3tPOsRcuiYamXjfRRzDTrPXLBjqkAVFjNWc4owPizoKK9fjTRFZfHkFgS95X%2BM2%2FZdKiZB04BEc4eBWihzlooQ2MQDbEG7Hj0ewcVse%2B28vbpNvy%2BYFgbe%2BmWY2IZ0%2BKnRxIOl3V3qWsdgZZE5vMZrtvgZ5idvKkjHRfxGuTLPhosOGNykyxHIfaCMkCzcTI%2B0IGtMZEDNZry%2FLstIdrZFE5b5Lv%2B3iP%2BNoNY%2B8%2Bt9TjN%2Fh9NyD9ybsi&X-Amz-Signature=af41eee33e72191795bb9b23c2e957a64f31fd23713bd9ce076f0a34f58f9b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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