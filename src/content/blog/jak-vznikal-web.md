---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTAQYSR4%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T163739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlMIQEA8%2FZ%2BzI9Iptqo88KkhI%2F99rnh14m5O93bDCKuAiEA9jonno4cq0x6mwfbEaMhxOuCGkd8GzOZLP4b9fPBrC8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN%2BGZlbLzmgkQu0HrSrcA%2B0KADzhQGS5yDKenYjfBxBNKiV2VjUqRFaFki0IECWMmtuVaaUykAwvAtpc7o7jY5PrCTX0gkZJ1XsWO9KObQNbzLICj5lgTT0tTYsfdjwQ0qRarob3JtdLQ8PU%2BF9v7FMpGxNe7PK2e7kr1YIdSTT86FWUlklpQ7inZz68S8kdKbB%2BCtAgsFFdoVME3bEC5q2tKIZRXqw0CkfszIZgLajRp6WMelwyTKwYRNHTEvtVF7cAuY5Si4x%2Fvn31gxQjjYzlKnyTMOba3rrGplMlGUejor2Xr8ihZjyIodEMGV%2FXMVbj9%2BQMiSVhHWJbPgkE3ZjOi5OVOu13M61%2F%2F0i3btPHscsGKl0TtmrN%2BEB%2F%2FtVO7EeRufd%2Bp%2BxpcG2fqRggWoQI4BA9j7wDqSKTkmDVOZn%2FWP%2BQJYHVEa0X6ONfqFjFMsengUsousfBrd14r52Dgx7NX8HRZ4CqIoppygtnTgEkrkwkaQO0AkN2HeNG18CrPV67etIGt1HImUfI8mj7QVRP6gfQKkSe11p%2FaoewOjCyDSAU%2BkHAPrcTM%2BM467AiCAKKgM%2BKLLvMGgswhAH7zmVDO8oz%2Bodcwy3%2BOJQ5o19ouIlu65ga1xwWApNmI5J07%2FsUmpHGZNUBX6X8MNLW6MsGOqUBQCxH05gUsacNp2U%2FDtIJerBab8kYzkivfJIaS0WFtxTO7AgMT7BZf9mbxalPdSo5U36liLDL3x5OoqROYPStyUAtfPkbbU06r83cat4qlzFtM%2F7IsHxnUJ3lidxbNVnH6JlS6fCIRg6TPCEK%2BDNGTQBH3exA4FCbQlXsGe04A%2BjuIk5UtNv36Oc2SkvJiBQBVZOJqkzKHt1f1oPhflhx9YfStB8X&X-Amz-Signature=c917a1c2c0fba7f23284b6a208709253d7556abb08c63db58e3930a71d75f92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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