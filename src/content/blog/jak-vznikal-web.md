---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags: ["[object Object]"]
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULE5KNF%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0qZrYlJuiad55cPRvKKhVty%2FvfQsKOcbecOMNUhuMKAiBprl5B%2FYNsVaq6kamDSu%2Bnn8uuUvfAk00z4eAOVdQi1yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5w0QNSrEkU5TJusyKtwDqlkpdEkL8kpl1IQZoOoZnF4NylVuGpBTkLeRnKku0e08wT1rmclD2GwWCfFN6zDWG4HFVb9sCv0DD6CaBV1AAvKv4gv%2BoaivwS6dokFfw0UD3iZ983MMJASDcFANFoO64G8juMisKuzznA8risUotcKQTjDaiPq7i851F1pyYAb%2FrrYk8jPpOBRJzjk%2BMwVUnNXaHUXm4%2FJS88vFfesKsi44cQMc99FTMCvhq6FuVdq5rGDq6xrKpMvqUd9wFhfsDc4oYuWV0XNo%2BARCQWm4jjW0liGrPeX0kd8gB%2F3nz%2BymZcWsj%2BhDM5qaTGm6Qkh2dFWlLGZ%2FONgtol38GvrpWqwspeSPlu9a2VwlZnffNvd8YUjYkSPQ%2Bx2F7nLcBMeF4DmwFCw8o%2Fq8J3isZVIrdbrPc4P9XNtWZ9Iiu5kmDbCJTp3NFwaWL6zwx5ZMmvixFcX%2FYo1osmryLHo2YcUM%2BX32abCslxWCRAeB3p1Hhk%2FgXtUZjcI2FBoISsxw0SKOCfjPEVFRYZAJUAPIWwFCllIReCs1QtOSETJPBgyxuv698xF4byu%2BV3IlXjUr99UyZtNoP%2BNwC9YRKLNrXwSWhtHlaGJIaoy9QyeJcOkAEzaxR1E0l2F1RyAgi6kwtqnsywY6pgFp0HR2DXMmC501l%2B6Vmtv8MEzmYFj3zfY5KEBr%2FW3ip7tTS6hO6PqN0drddasOGL7DGAv4u4RXjxsoxWtp6ttkOuv1Je7X9bUSDPDJcjUk06feo5fKzTLxJZxU%2FuSLczsThqVhjlT08Be27g7LBZ25udNHdjyVgDzCzYRutDpNhGKsws82%2BQ8K4YiyV0YJNXvXEo%2BpjPt4eg2K1l5XBBE5pBKTz9Jw&X-Amz-Signature=8d8ae104ec4a94440881100df5e64f6e6979c1d5c13b0b9b5b55bd3f464e25ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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