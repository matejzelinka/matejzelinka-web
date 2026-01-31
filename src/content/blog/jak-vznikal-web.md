---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBI7ZL3S%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T214633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5CARc6%2FB2Jkvx0sePiPo0dfxZm%2FIQMCq5SymUJGibEgIhAPU8eTpXel7r9tdKOtHgHhmD8zYW9fHtlOw95RwBd4MnKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcxeLgW6y1%2Br3rhhoq3APqybFYcnpUPzQK89G0LP4msDZB2TEgH%2F9odn4PPWd6qJctiM9QY5gzSmw9QSJHd1aOV%2B7FePElok7LJoKQSYQwtH8l3gDZQrwMtl1gYeUjERpGPqbboJ6UkML1%2FX3yo4urGWLRkyPxWN9oNU28Ef03ox0Az7mcEd2DFIgeWy95v3OQtSXV0fsmai25xjixTnKUrh0eBS6b5vA25v%2Fk2jWAj8jzwsNqq9cNUTXUWAua34fkBPF7ZqRZVtelQTvWogtFC%2FwDZMMinLCkVyRy6zoNXrfOnjRXWKCHjjK0luRWV6LVeG%2FqabKJv%2B%2BD3hA0N4aEOcNzBxzOV9V08qao%2FB5oQlqx2%2FJZwCgQKmIHLk81ERP8%2FqvC3G0P79SfzJrcfDG3AxytrhTlUtSyLwSdDsSoqcEYOCdVDS1%2BRQIkLv7hPY3MGfZhPlxf5Km8cyI4Yqf35Y4Ks0kRFSB4E9%2Ffc7xi5qTLqAlD6ildv1pohShZgN9%2FLh3A%2Ftdv2M5VtTsJfDRAZAYieVuTxDAfHc%2FtnW0pzB0BFpIoW2pHKnbQ2k54vkQAs6TZuPScSnJoSwrwqXYmFkVgd0CRXfMn1Uuncj3izb%2FzMB08fOuZDRCKUHcUng7OekVuDq7e%2B9gnKzCbn%2FnLBjqkAXZ30jHJe7HrWUDfgkZ9CMayFLYGR83MDBMOM%2BX5hFdgSMU5iMHwwjyyWyalBIaeicjOdOMYSnTTSvK2nMJkkeH5K9nyS5SV5rwnj96hnKVqMxNY4QG4Lz3xC8%2FnYa9v2%2BzsTPBkvnf2%2BDsJXNS04BTwI0ocVV5ZnzgJUDz%2BHVCmDhJbDMumu%2Fs9agqQRk3N8ugwr7HStHKXYkzncmJBi1RF8voD&X-Amz-Signature=e11ae7aca39f92f4d64769eeed089974d49bb971a8459426c89b5f2c0fad78cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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