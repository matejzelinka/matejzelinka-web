---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666WXFB4%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T085719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoxYeK2ywfdwY%2BTiLZX76r2ibIfwsnZvHBCctw6Epu%2FAiEAq4Jmfnz75H0h9LunlaBGqAjaxW%2F0mj1WE9wxVh%2BZAZgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHrp7gp%2Fu6a4copkircA14ZMPJSv5wrj5zL1%2BRmPnqlndv8LIVBAVafu7Il58MYWdwb81q99Dhin2J9zNKqNSmBEEyAPstGEILQVZzc5WErrwvWVSe9lKy%2FFTvb1BAykd2tnpGXUcEwNGaZW7IP4jEyIYKdL7ppsA7SxuhpoRAqkGZUnSdPLR6o%2FdT9KykrEXSBEUghO5ocE%2B2tLYTvY0cG30JSn%2FgS8oi2bY2VB%2BB5W9LhPfwcS2GOxgo3bjkoQmZ0vG997m6wA5xLzRcKQGjBuVs1BcvZ8%2F8gQPnoCH6%2B6R87jJJLPUhrLLClWOhgy46vJ1%2Fp6AvJCtmhiOS2nGzDkjz01%2FOe%2BL1414LMLjus4qqzDl2X1KovrEAyaXetwLwV3JG%2BZR4tT54IbXsHh8oVlw%2FyZyunfXjXVd4xmtsk9TDXe8m6HcISQ5FjSJm1AksbzympdARF373RS03ZeGE%2FXwjDIjibVcbjXODOob1R3K%2B2q1AvUqmMv%2FxDWjhqhB3BQJoDSPP%2F8nlJuHfJ2O1JeFzhojsWBYPORhwckHk1%2FZuW45uLLjLQedphZE7EG7lKzW2PtVkK938WTupdzC6FoxcOEN%2BvBOZwagg8WhAFzfUDOcErdx0u3HJsYP%2BstdUFwvBa1zMRFnrWMJSp7MsGOqUBnRcFgWTkwG4Z4e2Cef6YZJDCFTZk1Tsz%2B5eSTQMny7sovYQi%2BwdVdx2iuoNccbbZG8xo3aTARc7vhtMBzJT%2B5BNt1oRiaZRoBU%2FRqjESrFUD02k02qvvewPo0j5XKR3FV6IcfNxT6oovsikqWUGlLitcVw054%2FFuJmPL2oQL2yeP586imGCAW%2F7dIsF2pdD30i%2FV9CZqD4MRP1fHMDw%2BQQLIWw%2Fi&X-Amz-Signature=798ca34baad6b4d0f9f42d028f12f63dc7831209b3001c43468ef926df66e2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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