---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2Q6VL5Y%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T112303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5wErJuUgRqyFyK7SyzmnprJPsE%2F%2BQH5nlyCxl%2FCDO%2FAiBdRbuU6tb%2FgL9F6oA9Q2gX26jNBhz6uDpSC4LlVInWayqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4byE9DGjvWWw54gKtwDBono8ovU2unw7psp9y59PgpZjRulnNhhTz86NIh%2FwXuhP8V5mZU%2BFXQ5Xw4J1gU0lc3VatSNXPRkhuzeRVatuDJLQCcPowmRWGFVPIEyJC%2BH4TKWQZe1ly6wHNqnAQ6lNYPvyqKOs%2FFxJLF9%2BovLaSKsn7CsEmqthiafcddARkpz%2FGMPTEcrWYLSX39oJSZNS1NMc49SPIJYrGo0qEZht11xdfr%2B1i5NtSG17%2Bu1F1A%2F5Z74I3NFnvLbseWngwa2ByRmXxf7WDZauJLEpvy3i%2BYuTWL5YXpmekkO9LamNqXXgsIz7WYNPu0uflkZgE%2BHwz494oelZYadRRmeOPtwpqIWdzHHacg5XNypTi3TTcsC4JNBIVaJbWQNx%2BRi66v9MyMcuUw74RNpXOmsS%2BjoPvtQSY0uRJvTfBx8NS%2BWY4reoe1rVZVxAhxsmzJ10q9axXYiGH%2BN4aJhvn4Q1O%2B%2BNXj34yh9cguId6fGLGzTBR0RYX3h4Oj%2BSAJW3ViMJK%2BmeOeyIjgaYrrble764n59RQUC95xhxTiUlPC4qVKvRoUvu9XNZwR5r8ETkVV2G4k0FB0V0oKJ2gyPMA8ns2XoqjvdY8JsotMT8W2Uoc0dEyp%2FaEJ7lZJFZUvEXw0wkMT3ywY6pgEPBLkhm8ZCSOHFIfzjVEzxfw1zb5ra9ii1VIWKtAzkToYhXoDD%2BWGvzPeUt8%2BVrsjbyb6grVwWw2ESx13DF1FYhtFQOpnFZRvy4qd6HTqWKgJYLzwrile2WVQhDr917ZIBIkXjrkVDsdSh4dy6c0kOlYXF%2BgJX%2BU%2FB00Rb5KKp7P0iSg0om0uMflm%2BdB5pEcR2OieGLvDjEmwRckpBd0ARf2HVNc8W&X-Amz-Signature=72d8db6feac1429f382c2ad9f188a2ab920f2d810884e9971ae9e6ca893510a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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