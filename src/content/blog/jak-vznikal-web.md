---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCGCRBHW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T093259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz4CYJISH1KMl6h2bisSqEWy6MJhpi3UbPnZ2R2VdzCAiEAgJMJwuiXyGXDOKI5jRH6j4X55D2sy556YODaTN6rZWsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBh430fizWheOTKESrcA9xmce1twt8E0SBLthJ9c7GHWqYwAeZJO3NlutW8Bl%2F2mu1hpHRT9dWFGtQYtNRxy4mjZ3V7CZVc4Z9ldE9OFbuXJWx%2Buaw71g%2B%2B50W78vN4AiwSkJJwmHKMkhrMRqcgc5M8Dz5g6p2Dw6Iu%2Bai07kpuXTQGAAh889qxlxrwy2ffHT4PaZVIG4tnXr49MSHnXq1Y33zbowcGhicGHuwD0Zu2jv38CeeeyQEkpTL56CdL2E%2Brtvk2uX9KA6xQZwwZTLlhvGvy%2FYQRDfsWk%2Fnwwb7iaHuMzvcekwb81mLutSt4sdGnEPmlTBBA0JVkXZBLekwqYhsNf9rSk9g4XXmtGx6qfe73hK9mdv9jtwfzPApvHkURp95Wi18E%2Bnle76VX7gad5xPbPaZLjpB9YcjPVXxBr%2FT%2BvhOcGfY7om8bpbm6udBgnUemiAYlLBJ6SVUURs%2Fy7dTgiPbwpy0YsUcgXZkRnv2xLgV8KNUZHgUfJQ5QGL690Op6O3XNRNwyQlZOFLqCb13l4%2FDaIwUG7ZGdtl48T4WsNX8ZOQuPRcBoSD91rjFSC27olHSnZbW6cyhN3uhY2uzLijVwXHKrFzmT1VTHnVECEDSCSBQyCys%2Bu4T1dthAFYJWmwWSRXn0MPHq8csGOqUBRcHv2yDGLimqtKVJRhkt%2FMOatZxTJ2v4ED2Wrv3h7Wsxw26W7V2U%2FuWVZq%2BnIVRerAiDoeEacVo%2BTnoThGTvpwq3TRUrRytrzU6lNCJaiiurwX0EX10dSaEeUWz7BULCP9E1mnarVRF8w5l0YSdwvVUfoS21d%2BMEhr6%2FT7O6%2BxBXROqIFy6mPGGeSZ6hxeOm6bLZ5Jvmtsgok%2BNezGnGO6qbby7g&X-Amz-Signature=e3c07371244bb81fcce93d52552030fe1fa7f9fd53097c82480f19a153ede556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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