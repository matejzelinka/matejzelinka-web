---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLMWXYX%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T152713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdD98ewbzvm0dG8GHD%2F4O%2F%2FMjykCuBxh21jXz9FLDOIAIhAPfRkgCALR9uqBe8JBxoSU5TxryvW5uLDMww9LOs0xTuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVEwt8IsrhA1%2BkzIUq3APzG9kLT%2BguuL9ARhk%2BHAXIiJE4HKsqhvK5BplZKnAEYuaRpHgm6pcWj4SBIXmoqv0kKHvTTk4nZgl8DbIUDlIEyNGJ0l%2FjXamJ3h5X3jt3eu9J15hbk150%2FguCrHg0K9453uq2NqyP35ajPPTWVAHB6iAEHkrA247CJ7wQO2I0h3a8oDJ4SHYQQli%2FmRuDiQ%2FkvJJAr5lrCm9Jom6ZqTK%2FR4WlRf7kMaqVxfDeUe1jrwWRHAlrsO%2BN5uC%2FH7L1g%2BnDnAnmwAy1Df6B3B748V66MT7rrk3VW32i1jJriLrfgShTqh%2BH%2B58CkPQt6L1C106OLsQJ5yiQNkmh0o576Ys2y0tWWe%2BR3UVf8PEwuM7EaGRlHsvyoxaNqcqlE%2FCuQtoEa4Uoz7G3nmMzxfz19iEyXHzfKKNMf9PPAyHwtnVzEYpZWkoCX4OtrDptFYoyipITs8o9tUhwn10iG6%2BnMYixHOyhkr8XTqonxRyB5KWn8AfxDyPyShxPufUpIG7GNrPv%2BJbyvan2NXXTn7UOlXTmDHmIKRhkchCRn8r%2BO9kQ1NRC6SKu4p3Yf4EobeYTimjxGCVpQk73lXuB%2BlwLYrxYBm59Ko8SC2Z3YAQ3ebyfm0pSIRDofWxFNn7B4DD5gfjLBjqkAb9qhKpzcuvvMoKhLhpZhtHoVQ4f%2BtRdMrEZAFEmsSJgv77axzANXrjg9xrq88Ee%2FGyK6Gf3VXI0fmrXXsLYxcrlOKAb1NfeaPRsUWQjLAh7pfp0HyVsSJWVQLxd%2BfPwSCzgnaKZ9EQLQmRVISoac3o%2Bte%2B2MROWclbP8s%2Fjn%2BqnpuB1MKlZD1FxdG%2BhUUhbyV6k8LE8vrZkUKvxqy6949ZVqwof&X-Amz-Signature=37d348695b229c2d1e084d58559fb82db03ed56f85e2bf89b73a7cd036141b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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