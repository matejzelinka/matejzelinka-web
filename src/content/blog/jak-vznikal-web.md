---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7357OWT%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T235114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2FDWWCfcLI0UznY8c2Wc2ICk3jCy6vI2jJ7Ds9T9bXQIgENthOFVvNt285Lua51CsmhwzlIZqdMMCjo6II1ipMVIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1OX9Dr2sHVhLDLSircAzb4v%2FNVS1QlYjdgyYIpaqtTKIV0ePFNu8wKT8vO6028f3qWPEq8pmoEFS6uZNbrnTjO2QUiMLCAiH473akcYOCvLTSEJySa7686kixebD0uPa%2FFLI%2B6k6P4x33XFuQ7p5v98SFXHwot%2BjhjHoVBFPCI5BINF9IaDRXAcZTTKNGZOoTO7cjavOHN5Mk83x0uYtXyY1ULBh6xpGJXf47pMc648C7M7vcqZazUfn3CKnIhSAMGxHvJjvr%2BK7al1f9QLyj5baAYwrYgE8olcZATlkhoNX%2FXzF1aE798hbVM%2Bumf5yKgJ%2Bqvww1p8bgMZQHAg%2BUMyPM12AfLPw%2Br03xnWLYF8Pud7SqROw0f69adiiIx6qBZFMhpZFsv0D8vZol6EUUrcZveg4g6vaUnn8NOgOPbd150u8JvkRbZi9vO%2BwD4A9aXYEJ%2Fz2rV%2FUta7r5O1tAyu35iwumm%2F9whAJNx8O41iifrrb7Mg4Y6whoOHwaGPdk%2FonYFSC8htCGMaLx9eEHOB5twbJSEv%2BPXvobwR5b45JndRCPUtIXT8OB7hpUbBapnl%2FiH9U%2FuMznT4Qd91cScecghscHaHpoGqRQ4izbu%2B%2BiDuASH6Xu2URjS5HJmNx%2BoEkLYsTHdCw7%2FMIO0%2F8sGOqUBawwYhHh%2BWOJ5IflWVhhanCP9TdJ93E3aJIhEbzg%2Fh4%2BABbVw5ZeXyJqpIi3HelutWk754MyjFpTlOFWJFwab%2F2tWxJ3qx02OK9E%2B5%2BR38gsLzdVFWnCxkgi%2FOU27WHDr7KJS%2FGzDx%2F6zPNf2QSPGDP%2Fhklk2wabWsB%2B%2FFXuPK7%2FuZc5DlNg4Ao9vyCPvRGGDjaveC0rsmanv9VA%2F83KIFT8YzHHN&X-Amz-Signature=949fb304878d8d4ee3f9da66853eb75830cb38cf7b941b199e5aada459fb81ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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