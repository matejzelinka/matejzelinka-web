---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJMDH7W%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4VrAGKfaViMGoxEa7xm7WNnEBKMQNx880BV3uWBUPcAiBnWLxzf7yLh00lbsxELsJAA9p%2BohYnW2l%2FGkkyQqJw7CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfmkRluZh3%2BlB29CLKtwDnVmGJokLmF7pXFV8tFEHMJO7AiqgDXBEhbbe%2F729u7A7EywPff6RB1jwOC%2FUkcZKvt69Ma9XjTwSgmQ0N7DhJJA5Z6g6FvBuHiNiZib6CH2QmCkD%2BV%2F540D4sEkRpYcq7pCNTjjvIKYwCU3uBRIWz1Av9LE1JAvBeF9Nve3TP9X4hQVL5Rnl0ewWw0xt5IBSzMw2z9GZt9TRj9S7M9LCG2wGllebJk6eeRIFDZ0MmhU9gSgIoaYr8EvTdC4QOGLOGf0g3HHP6bai%2Fhh6WvJp5yW6SyHErc87vq2FiFihvvdIRQMInMoCMvRdCzlOQznhHJ%2B%2FyycUlcOl%2BKvYI7ymV5DjCBmfeLW85B5p1vUhG2fWs9WCh2RzaG9hermlFg4XxmgqZ5ahLZylAL45ZQPAGVICfZmCvhNUv0aSIRi%2Bw3%2F8ViHtUyypNbvD7s0%2FjvCVs7rWeifZ2%2BF8tf6R68rPmoDPNoTLHpsEqW%2FaD8tt%2FJkYivw5Za8iV%2FQ703vGm35v7KRsJUv2fRMyGwoMiVC0ktjuFaE%2BRxf5GJno%2B8vgfFvajG8Q5BFcVkVLfayO9dOB%2FU73UGxxtfKqLcCLYsWK%2FAL%2BDLmye4FnfiJxtDJdFtQOGAPmOviGY31C5VQw%2BKPuywY6pgFy1MB96FtDSaxIyZrn6ewN1ZgWASkI0UlhsMn%2F09gSsHo1iNC5jNuJj1nlWTlEIIpG9j40pCu00ctCsO5xMZSRIe19Tv1CUZ%2Bg%2F%2BVG7yx6jZWGvHaeqK2%2FVmhtky%2FmkCi4K6R3caeU9UWXjU%2B3%2BJIp49LoYStHacWDH%2Bbb4Gax2FtbXkbaM7fOsDjV%2Bs2%2BdqOppKY66Ie0xJvpKX%2BGmsX%2FoFdnhJmw&X-Amz-Signature=c72ba1587b713f0c312d296a97142d6ab5a902dc65437e7b32578b191005190d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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