---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3S2LNT5%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T113113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvaewDX%2B8pED%2Fx6YsUjVJ9LJpiyhxNNB%2BrpkRuHve9PAiBRi%2FTYXElEKUXn2H%2FPQ5s0aqaC5uJqpVI54Vlvhm0QtiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXFfbTPqWQAEochpKtwDLN2WpCygFIouS8kAR9cVEWRbOQmL3tbIvyTa0G7TSLu%2F%2BKdOeIDaZQpLN4QUbfsoEJNCaXP61yyRJpiUDAb5etihQfpBYWybAZkEtW1jhbF4zsRF1dvfYpnxmNQ3%2BE66TT6gRQqYnK3z%2FPi4t2kqR%2F56%2BAw%2Ba7uk3ovhWTtnLfTp1xzpJE02a%2BEFlMhiH1go5jJ62Dq0LmoGWzTRIf8UqSyBLZ4YAOH2%2BKFSokP4%2FUAFrkuqOcPAVHuifN2C0K%2FBx8%2BM4WgfvkUg%2FLZfRWtgV4kY5qXh5bAtivRzPqfn3vwQkbt%2BA0Fnc9MUSNCdzASGFCkbWp0%2B3%2B8gWWrR%2Bpr1qw06aTiLxT7O%2BqP6MIUNFuqXs6a3%2B%2FNaxfh8cS9zUEqlgiHtiM2d6IrghiqMXh06TAjS8q0acXAnqtVfVMPItuUnKG1OTR9PQZUwu61kUJxaGCQCawzRHZ8Vo7ipUOj2MsPPPf6mKl8MX8LxcE9zVsr2T1Z8mAfgIufwl4jaswhfzTgY4c22jx17hKVMzmn%2Bg%2FFPbA0baU%2FrXr7x8yTvmJ0T2bkGc6Ho7w6D3vy0lfU1wXJZflZjeKHVP73AdwS%2FepM3%2F2mgiMafuw0DYNvK7eArwk01iWiGBgC7P4kwz5LyywY6pgFKvQ9bzN39Dksvd5EoUsUMBkEDCytiUKsRMjvbNSxvhFcxCTXTQ2lrcFdXxSyBWlj4UUSNqgaRFgCQ6uB6PPDd%2Bm3kxnPl%2BlULDBxwkkhXCFDfJxL1%2Bvpj4Sk2xSea7VJmvczXPd2%2BLMq1GtMktRVKhCPKwEIM9sv8iOB7XVVjXOR6dGpIa2AjAxwVnoTHLvWd3n%2FiBoljEosoGwKB%2FS15Fn8zJe7z&X-Amz-Signature=759e44c7a5e14917251b6af6035323404bf6be3cf393b086aad17636fa530923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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