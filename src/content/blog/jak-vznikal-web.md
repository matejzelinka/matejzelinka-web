---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB6HUJ3V%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T165323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMOv0Rx8GPnkJv6KCjGMc%2BtSJklk6akHn9SpbXi0zuLAiEAklREHHVDIcSQqf8brLglAlJvez9L2ArjLyDtXb3k2%2FYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAsJl5lWN6HHP%2BvcSrcAxvM9KEhRiHwKUVFhDD3tJlEu7EKM4t1WLkI3AclTUCdSRlRCfPfASzhO2Zt%2FihmTiU%2FoiGzb4hXNOs0CFzPdC%2BsXV2M08mWptg7hEC%2ByWvfZX%2FXi3RgMmjMDwJG4m%2B7Ch2tZhM%2B0KhY3CRCrnPHDZ%2Fr6YYHHLKpGBUFDXdSV3FIup9akfcOjlhiTlgPAWFCKFpGGTEnK5Ay3tv1xH1kwLe%2B7uDJiNmtapPo%2BbCuSat3Qwv6pT15VKpVOpar7Msv2XZ6PefwCuHMgNTOVGAWbx25EFLz1J87rj7NRSnkh4uA2Ufffc3Tc%2FPqHCN%2FrkLXGwiSPh3bnMhMaJ0IOTz5m3pqpJvYLiRHDwvWmgq6woTepILfoWvfqT6pALDM0s5zyCNa0xUKdfSbtBLKT8WxiohtsgUmZCGgcB%2FpqacUjW38eFl0AiBNbIse00Y02BHNBAaC1F1CU5qXPsjiw2HYPmofx3%2FyusFmOu%2B42SyTBo%2Bq5JTgFznSq5etJazHL%2Fw1fkiZ7ibaq%2F7ZndwDZ0ZzIgJmDLg1srxRmUYvzM9ZMRN6R%2FgDgBYY7PyG2TJmIyX3b3l8a8IIQZ0invXsH8eMuVT8brS4E5X6n%2FS53XobhJoApkaxhGzBF0SRSF0JMKKP88sGOqUBe6eWM%2F0PrSpafGe%2BJf6rwnt3CtfRy4eRo2lJXVG1NnhgYJ5K264Z5xZ4Ip1bzYMc8Hefd6fuF%2FJSiyejIbUQm80v0dH7lkXsuBGs%2Bs6%2F%2Fim4B%2FSfyWOaeh5tL1ubQmgymjubsW8KecSfy0vGSyQxjEBeeoAE0S%2BoOPc6hAYM7Qe%2FGL9miYqF5xqpmNZ7aftMF1X06hlTpzAZzpf2Hwt%2Br86XwreJ&X-Amz-Signature=32c9db45e034403cbb3ba33be1fd65ea49a509e0c16fff4376337b0b87520896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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