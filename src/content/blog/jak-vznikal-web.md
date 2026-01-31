---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRXP3IP%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T145201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4e%2FSs8WO0%2Bky6jGhdBVZH5la0ySrL1PGo5WlBbii%2BzAiEArBakZKq%2FNkJh4FCURSaReC05GsQZINciRKnhR%2FxcDusqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY1u0BN7MP3e0EQAircA1Uzkak0vApjZQLlLMPRDpz%2BT8uUCq63aAdKwSbkKjFrB3Oo0QEhQNx004nPuHShdp%2F7z6gn9PI4hLdsPVU9EnvzMp%2FL4EbpV91BBnScYKNZq%2FlOkWbgN1p47Er343Tw0%2Bi%2BADGfv3lsn7TztupkO67u9RFl5t6NNg5dN3MvUNKyvPgS2I1eX3hCc5SH0a8DMY0k7w2IUnAWS%2BpxAqNmVUSkipwiRRBUBvQuXA8dOA4naB6x9%2Fo%2FZLHip9IT1wGk%2BsKjAGHVu3BmmxXPrVESE7dpQGUgtV052vfXrH%2FGUTKC2kDbfpTkFJmXDLgAM1fP4zW1khCRVJkowAG6poSI0YzpbBuZNNdi799yOOVXv%2FxCRBxpY3AEIP7%2BkOLr4CEQgJ4JLXVZOX8UdzWAV9VQ7VblirSa0hkCZ9KAXjYpSQ8%2BicG%2FjGmNScV58CV9k0qcSd8WPkvjTH0GTH2%2FbV5vA2qThaNraaE8ac6V4Nqb1uO%2Ba5%2BCCjN5%2BIqxfnZE%2FSxPM4iBBRjAatVcIRDLfvJmxmAqeos%2B%2Fd8J8EXlHNWpX%2BP5yiGypBOlVrQXrOd%2F4mva6JoJkCyXAn4Im2zfNOZS3tzYTcbqtrxPAIKkdo8tm7fwCPtN1C8YLJxBH9wwMPiB%2BMsGOqUBU1CH6H054YPKaa0NAeiIcejKKhweyind14G1yBPrtdOVqufg2QXuBqCkXd1fUxWvDepPIlrV5DSnKZQ%2FGFUmvmpGXsR%2B8v5ZshLpKU4fuvn307IvbPeWtzdq7yN4%2BhxesKeaEGz%2BIMNZKmxeJd6k6tJNsU8BKWHuMdelIWvhQJpMNevIBcFxBzUJe%2BzrGNeMCQ7zkoVMnRY0e5M82Hr5JWMbStko&X-Amz-Signature=a4f419009fff31c9a41cdb136466a1c32536f5d1cb176e00f3285486e79f6a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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