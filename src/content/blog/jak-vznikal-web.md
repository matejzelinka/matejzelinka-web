---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags: ["[object Object]"]
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKRBVYL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T084256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjrVmmUxP7XxAzcCApDAGh0Qj5z3Xb8dFNniJNZOIhiAiBLLIVDJKL%2F6JcUivI0cXIJgEX4dHr9gV1iEHydWv6kwCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtteKTPfcCMAVIZcVKtwDxTEf235cTwxaybDPWI03rlGk1pd1m6I6f1L3lywx0FBl6m6I%2BF%2B9AwNak7pQlzoOM8r2WoRmguKSqRV0AW8bwMBfSXV%2F%2Fp0wQ%2BTbGb%2FopHVNt2ZPYUtRu4RDpbWf1BPRs8cGqQo7YlA5J8BNhAK%2BWojDTurjRjuui3H62opLFFlzb%2FnWyQ5On%2FrnEUF2VXiCM51WhzB5cpxkn58OBTII1Bul1Hoo737hvk7deVXINgA5PJMo0nmqzy%2BIRJoQttsBf0yc2Y4VVCMbZtwRQdHvFOwddPS9AbJXpIrbh%2BgU0z6r6OoDyjsBut2F6ip0OlUCCHWwRn%2BEu5SesFI4TJEIlw0XIP5KIIf096vyud5lfxvv%2Ft4BQ7kTGn0QIwVvHk4qyIut9XW7W%2Fj0F01HAb%2FzS9n5QtLXMAOJkkcaH652WeeI1vPpIE6EFR4dN%2F1UmJIqpjeT99TrhuvKhWcdCVGv%2BLaaTM8AtIh9%2F%2FAhXpkd%2B43wVIjC7GZOA%2B%2FRLainRtCrUiJwmywUEyKCTzVzpZpJ4bJ7If7sgTCigLG5VF3cYzE0uehXMDfgUVqixuf4h3gnwPu7TutqocfcFNbvY%2BROyeSV9e6Y1vy1KxDgJvjidYC8FNA4mPHTDA0RcGMwlKnsywY6pgEggC09wdJxSwBXkMCHC2Pf8cT6hc9QdpoWCd2b3a84MskmQCabWjwiyaohgHrwlDid2K2aMyXSa4%2Ff6SA5DGAzHHu9jAaeAEkvIf9JNH9s%2BqM%2Fmvoga8dwWWaIDwi4NSWoJE%2B1iKj0b4gjSZxX5Wqv%2BSwS3k0gWfo5MaREkjkE21Kios%2BO9x07kbi0glpeepiRZDlBGBaXWgZFW3dwYN0EimhQEZVy&X-Amz-Signature=6cf1bea2ab2a16f6a6b129abba901081e820f818f130e73d4dd86f137cf8f0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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