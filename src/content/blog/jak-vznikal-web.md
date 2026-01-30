---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAKDDQ4%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T094105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eY8xHpuhLbx9KGke2FXvFcwmEkuyoCrmtKcNysSyPAIhAJD0%2BZMx4nN%2BeDYh4V%2BbU7v6mPNJo4PVANbeJyFfMzLkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0f20qhFLvsGE5Xn8q3AN1k1Rn92mZOUW48BKqkq0o2%2BfrKVE9%2B0QHwMc8uubJ%2FhrFiklGpF%2BwfCslDkHXcxeylVDUHMlv8DfFNQj1Kvbe1jwS4%2B4rnKPErjme%2FH0x3r%2FjABy2NgsWaIPZ%2BcV8ggE57EM9wQz%2BZ6rLr7bl1HGfaHPwEGehEyiXe9lsk2qaW8aQBStTv%2FGOLSHokfkzk7JBJAqipd9SMLMC%2Btc8k2ykeQM2LtD%2Fchd6ZV%2FbRZllj8gPmiTJXKNmTkbA7CTyEEkyqvTTa5OVilP9BMCzFtqT2cJeOjGPuDGpDfyEUNagavJE5IjENZOUgfKQR%2B0TnVoaDKgCYLuQvwQXm%2BAqmdi13ehR4p99bVtPlL07ZkLb5Mv9DFM2t%2FiUpfn477VD2ZUDjK%2Fe%2BEBVmo4otibM9zQO2DXYU421iYIQhn%2BlrgPxzAyfxA4qejzpcv5QfF6n2P39dzhQIYeBSz%2B8fh95ed9qQf1%2Fr8G5DXf4pG9A8XII5yWi%2Bgt%2Ffwg9hafQtgMOKZ%2B02oHUbwQwXILujtr5V4rBmHlnxWek4BSndRlqtICAk1G2v2xy%2FNPDf7gdJqMFp4oFR5pCus54CZJksyI6cGllxypf2gZ%2F%2FddjBoxQA4dW9QoSBRGQPcuJ2UiMazD06vHLBjqkAdKbW7YI3u9VusDlyXHD8CpRaeJmvLRFSYPXzK5mWuvgEQN%2FdyHdtS5lMs1LS1lq4Uy19R41DmwTShVda4r5ZVxyFpM2sFWCfQFQ0E4%2FS8NuC2crRz1uT7P%2Bf%2FtPjH7H6on13ZaHnK3l5fhnrBCh5xQApUm7x8DF%2FojAy8Bgaf%2Bklaz%2FoLZDyDDUR5JdeyJFVAHbWmZESELcEBYXEq3HgBA%2BmUrm&X-Amz-Signature=0f85f86ef4567a325f42e6526d5d559c5379b5a40c32517920c3af264cccd695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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