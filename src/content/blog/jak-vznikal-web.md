---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMPCWZS%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T093059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSIIYnetlabcusxyTNaseHhChUCZXqHUHlm%2FO9ApvlNAiAdLAHUM2cL%2BDVvc13%2FT7Riy5JzZBLJpLzWtd0Dh0xItyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh%2F%2B23K72I3B8s66KtwDKfsTMMXAoXbtVyShT7mfPKhEsmupKayW9YtJIKnGct1sT%2BOpDHwGMGCz5oTqDBnZxg8VQewitn1IeFfXRApHTocpBx9gcklvxSFDFB2bt1xoEPVJ9xbij5WH6hS5zRu%2Fv1YkiWJj3goUKMoODHIoEhmMXi3hY9K8U4n7qHKj5vGX%2F7OsouHMuVxdFWCK6rBA1dHRLKDJ6fQJE6hX4%2BgofbIBqWZb4KFP9FvNiYKwEWfc8ivuY2gbwYInH7GfARGkpJo8q%2FYkhrOEKm9m2MhYExPc2z2a8kc4RkEDn3e4EOgqxFnaw61fKWW1C1nX7BJCF9z03PKnaVie%2BVhMp7%2FOh5P4QNeHorj9d0IdtLu2WFCz%2BIFxIUmDYCmCN2ia6ZQWy5Xylf2F0fJjOalGUjRVJWDbE%2FQoEaBDHHWnECP4pKV8iXJG%2FOUoIr%2FvB6ToCAdZBqudUai%2BjntokkrZTSF4PXyNIQAaGflIFSyXp8u0AQlQkyEJ%2FEAjuJxoUz74bRNP9DZugrr2YdWBeb9t1wkIyp4%2FIlEQA7MsgaHAvf18j655tPc1tXeX5t%2Fy%2Fq%2BTP6kCwNHah1vDOxPJP8AOASBOT7HZOcvTG13WAjvCbHIH2teVR7QUnTEcYAyi8Yow2c7sywY6pgGUCYBa%2FwHjMomy1l2BapSLvdy8ttnUf0EZiBYuje8Xvj6pfPJHFKrMDeT43DxE%2BGQfvWxLNAchKsk%2FXha%2Fy0qdUimYP%2B8cVeDObGMQ7YkyxoEuE19p2wbGja%2BWwQA0l%2BVpaAa2s5IzHyS3or%2BLXMw%2BQ0abzAeF879pgQQKAEUXPS5ywIzS8V3wXwIfsRHOPjsoN0YItomDXPOz40GEcy4Lp7go4Lzl&X-Amz-Signature=d61c3a9b1ff1e3d7feda9481f2da7eca6eabdc9ad5d68d0faa59f6e14657dbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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