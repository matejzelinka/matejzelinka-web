---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQM5TQZ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T074136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgCbmL0se2Zar2Ykb%2Bzd1%2BmgxmriE3%2BNnNqC9s1hkiOAiEAmOyzzddxF0yOetB0BmUBbas2VupSxUD8ct0WfSozh5IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuL6bWgnyR%2Fmy5TiyrcA2cS1lPt8JWM%2BZ7U5b2B1lb%2BlZud%2Fz%2BBwVb%2FoH8R6xn7iQEz1AxnqDdNvva8qu75ttktsso0CZUsJVW9WDwwmT2k%2F1XUw88N3w1KqxuDXc83oOSp6G5SXAnPkeLYZNIDRB6iOtTGyVHvUtS2CWwO0CmZZs694pBVdRkGmq7o0yhMH5sOLxtuR81Pb8yo4c662RM48ewuRpV1%2BOeUkaSacEerXTwZ9UV6v%2BdHBXIRpb6Rf5HPDRn4l%2FjTNPkdviAYJvkak5eqWvBlR5tBAc4IZLgQm%2BIgBqOB%2FKMltjDLtzQZRe5IEx3HHsf42VcpvFh7bV13fkn6FyMmJJ3uCJDAbflhSnX2ZuuSTJfiP0zzv2MhxgMuJKWfMHhzgLrE7D7eYMlKYG9IdrtQCJ%2FE%2FBa52KEF4GoSqmNUtwMiZn8rq9Ror0F48fR3Tor67IA1u0pBVLGKOIdeMvj%2Fo%2BIdYID3%2FY9ueB0lDzhRIOk8HUhQkVk90TsE%2FXkiWu7UXtxqAZg1GhqCfSn4TQ78cXbrsqwGJ5C%2FdUiU%2FyguwIz%2FeCHB4fL6oVI%2B4gVNggORJzbPpDbuS%2FjAEDPI%2FONreKIKzOXt10nfQ1mlzWOuSPhLt5ymAC7hHrc2IqujtwO7GYPaMIS98csGOqUBxKDKKMvMhwd6go8x%2FEVj91K%2BUoIFXjwiGI7DCOMVGVDPdSZoVOCJrSlWT6RbKH08M2cY6F7ZSaDAKM3bjaRXBXXCwCqRCM2tw1ljv7I6iUPkFjt8eeLc5RxdAzK5bjSgDB8dvBwLWT%2Fcarly0PaSbZKU5dTIrJg8fUy4BCoEOL2P5AI%2BBHpw52P3frLO9QFOiYz4D4OuUhHbWaoWEU8w2hM6zgK3&X-Amz-Signature=27a9aa4d837b5a4785052f55a0335e08474170177fefd7bc808e3024f23796f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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