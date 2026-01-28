---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVK7L5H%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T172658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkwu4L3B1S2MiXziF1L%2FbbTlxI8gg4joUJEi7AEHDqiAiBaNI1EkrHyFNcARZsb2HgDOStrWkduLIIHRxNqXruZgCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMSIbYopnz49YYPiIdKtwDVDHmPwJka57QpC8Oze497qkMctM6F7FTBkpWOW9PmvncZPtZJukwfJZ1L1kcVzEfhSjCOuyc2t511y20bOXvhNXeAG7NQ9KMY5Kloyc6Cet6oiU1vyYCCjwteVSBvC1AvpeyvPjuE%2BV51TVo3x2g3ORx2KEtMIQpbz6OCnuWqC95KXR%2FtfXJ8sq%2BiOP9AQFDCU1bh98qZHVPmdxwttfOkXKKSdsJrQdC7k3EWfStBNDoNL%2Fx9WskCJeYLG4nR%2BVNziSLtaDTddLCxUXZzJveAhMP8Zr6AOflfQKROh4adI0fuVvODqVNVmkR5l%2FSLcn6RwsyPuWjlNTKPYbRJpCVoFVKG2QpMmNH%2Bn63lb6ALa5SWiI2e7oN%2FLRIFk4PELzaK7GI6%2FfhcKqP25GHyjIDJy01dfLQsj5bk%2BJ5Zro2m9qTHudh6xExcNf2echR9hwRn4TDw77j1ztJK5jwP1EyXOjgzzSH%2FWcSYdeTJFiv4KnmQh5qfFulguKyGBIwAfqxoDstJM0UyuiBGTKVnDcRP%2FSJC%2Fgs0lBDTrbsIuGrvSFS%2F0UNVI1qdvfpQPWbbR3fKmnEPQRfoOWPihc338Xyj1jCpHvupIL51rQ4hb7lg4YHCd2Aljq4fGebUNgw8dboywY6pgE6o8fQaY24NVF7%2Bu9QWEN%2FxlFOiWnnjOxs31F7jB85pSDMfYY8v0ooPAsDdZa8fdFPt5eT14Oc7WI6Hm%2BTtxBIjmAl45y2g4OBbJDp0Q3wjiN%2BSNiQOclZVI%2BdDeVgS4c6Ed48fSrlPTZIZ8mG4S%2FBsE4KOmKfcxV2kxkI5Z%2B88B3Da7C8Ns5axMnWbfiFqM6bpp3u356U8IMq9Ka%2Fxxz8gUaF7EyX&X-Amz-Signature=ab8fa970bb512658e7d6a9c710f69fb2fefdc5231ce74eeb9b081d0766052c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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