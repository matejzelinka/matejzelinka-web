---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BVGGXR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T194645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGysKbUW%2FWSfsc%2FUweTtjIM0IwE0nT23T%2F2kiIzsu9m2AiBVCeyOTbsiddGXor%2BCpTvD3xXzsOVtJcuocYNoNBxy4yqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIe%2BnkAozyI%2BocVjCKtwD8PYjuL%2FVrxMfJRKgbjOXZFW6FXfYpmvLi9EWtr14%2FWbyFsT%2BQ33NGqNudZhm2u%2FNjClFKA7KKlD91WW7CWCzYff6hbwZ5xVu%2BHRk%2F%2B84hu87beFLK7AYx4YFsUbKhh4NqlRYXB3Lxy9xAROt1xumcN6kQxgN2j6FNvqUxH4RpYUl20H85EsT5d7S7rlYyFxWydDNuO4oIRO%2FT4a940RXEeHUbc5MERtZJRtblDoY9hSzCLjekaLeshcBymwy9O0R7uoh2gm0IR6ppOEby%2F9wfzxcdANqwJc4Iwl3aNgG1UWZMCtC1%2FC7%2Fwm%2ByacBjBxg3nQ33k7cYLyGRmrev3v14dkoSnqSa%2B%2BexSWO0hrphTLDmjSSFO8zHOnvqN0Si4GJA3GPaaeYCIBHnfO02593QU83l2V4WyKTRiu%2BDhaoaoekhCyIhoxJKaKRxogf4e1MSRPGVe26j0sD14p%2BJueL7DXjGVwxd8zIerCj%2BszrhQZGgYmr4J19IWHzaxyjN7sYOGA2n165hHLrf9O1iXkxdtjUa1DthEfYOo0NBrIR2sschBKS43K7wgAV1pUjH9PZZLwb7Hnsl8ZBYtQ33X%2F9x1mQ%2BUqzqociGl8GvbXUG5fiKZCKTOg5JylL6LIwr5P%2BywY6pgGpOZ1OmadzBv8mUTRsrtITinJFz02sbA0VmHuNtUWCkoQgOLERdxj2qUFLnM0CWjPk%2FkWhVbwEDc0IiRgsnDME%2FRYEnLtiRiZEK7UzLvgvb8tWijm6bmWtJsn0xVO6ct3dDQzSZ%2Bkmu7ZvILOR%2Bwlby2BhGhlXX0vpOp8CE%2FH%2F39mYYBE%2BGhALe1p%2FSr%2FIXP8eYi0WrvL%2BLDc1SSD09J2I81ggDZD7&X-Amz-Signature=f631ac0964f48bbe2646b7fbef579fe1de8b1f5069dbc12f3ef912e5eb69380e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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