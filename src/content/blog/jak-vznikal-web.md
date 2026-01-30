---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNAFBE4%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T233220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDocPWATU5v%2FiXRkhPBxJ7WqYNj8MD4rt32fEyUP7sMpwIhAPPCWKUxjwDUbLRFd4qfx9wCS9EBUPU7caMaWwD0yLPrKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAh5A5gtfi9ECCVJ8q3AOXxdkKtCLMiFjz0GMr63keUzgR%2B7pJ5VaLRcg8j%2Ft%2FlCX8ctr%2F8PjS%2BwpBqoimA7UZ3kgIpW1Crsjbanx4jZ4vZVZ%2FZnEvBHbiwslOVfhwWJ0FG5xjReA57Mi71aq0KpkenHq2MtPtTEhepd2ZEZwS7X8bWD6Kwl2BnqRlgD4WQMUgQCCJZnxda45874HCqDVwYcfQ%2BIaI%2BrnvaCnboZsuM9U1etiPaSmLQdvduF%2FNiUg9%2FcJYiCSStqTx3dpTIminY4eQJCQcBDEEfffdm2YeEgxyULMp7ABWpq4ZDPNKIsiO8DUsUwh2V2%2BtPfa1gr8S%2BO%2FGOdESf5Ps1FN118oqaCtlyUlEyN3IYVoZszYuonwL8cigBKKSP6ddKmVgpPIL1pMbmsUYpPCbigRcffFdTY%2FkssdfzGIaQe4yp3sYrvWjhAQCtXNrD2FDsTkrKKAU6lPQeGT1yz3nqDIiBIYzWjxjiV1pofN3DOiT%2BOsiePHhL5eQ1mjfEZg6FsoMWWN4Irj%2F0L2d82qevBwBJSxSDEYwaCvZGV4oT%2BJe8zAcbJ8VikP54ahzay8zO35ujuk7F18yoTo5hrl%2FgqgYoeqlq8IBILRJjw9wlpa8kdo8jc7FNoAkxBDnTOVhwTDT2%2FTLBjqkASgEioT%2BfUpAA0H6jL5ds0Zy1PrdlF%2FtlFFlvP38vjQ935FOUjl79I0H%2FHQXHw9tWVj8wG2H3l%2BAhyFk7oLDxjuKZrA6e%2FKusjUQayrNoyoINe%2BXy8nr5DdcSHDNtyPUJlMGx3CShmR00L2ToDgT23LgbjAhmJKvQZAHU1uX9Luh8xjYlLPgaXfcfuae3Zmexa%2Bp0%2F4SjL7oCh13%2FHUA6K1Ly38j&X-Amz-Signature=433ae8726f6ca08a26d984f2c6d8002b1f0f1f9d0bb03abf21827f66ccad375e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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