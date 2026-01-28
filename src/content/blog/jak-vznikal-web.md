---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPHZR5R%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T232039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bx7nBW2GixWWTcyJx2ByjCoPCmoFiinph43ZBhsrdnAIgVCFTToTWb9hH%2BwdTOxmkUdL3d7k87T68QxnbVg%2BgBHcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDA7SjQLZ9bZSkjkKHSrcAwoYMZzKlKBAu7qnI0%2F%2FtYaobMqEoyjmTCFVbcRzvBM285FY1v5059WRchWemVt1q8XqIUv0BoNOz%2FkaHtTDBvlB2AU9Ryoz1Ax7y%2FUhRHRDNwdqaA07ZILOub%2FXW31wYN4jZo84eqGlTnt8TqFnNluwHgavLibXNWOIzb7F84uSP0CaKWam8V4z7ldKLxyLSvblCUBQfsDFLk0MxO%2FDl7BHxslWThKcXt%2B2jXRvZS%2BwUF%2FDqyuM5hOYwNNZNbIqnO4Rqbgq6BSHlq7JH4hASW97wYJZRTn%2Byjusaziu9XxzRU2SJ0K54BfRP3YL91wgqT9H6hYvL%2Bp%2Fut1yNbaq0nKtAMjyNjRK4odA885MAqijsmuCEy9uxKvZT63D1oyFurMUbp%2Bt3Vyv0nxgtCyr%2BR5J0pPmbu1Kcg%2Bn4FOdbeiwOl6h6wADVwLT%2BkQl9IEk4O7fhUEGnV7NcB0MjnSmPggrrY0WEItzDKvy7TuHnFTrCUW1xV7USAys0SSlkL4dmOI%2Fmt3YZGS8rZv6t9Mdji0S6zoO8TqFUO9btIt%2FnOehG%2FnfzJmPFiJ7X%2B1Gfys4vWygiUkAUP96CJBEPksauI34N8IYxLdwr%2BzCWlmezPkuIL3p2vaI67gP55c4MNya6csGOqUBNATGkj3I2E81u5m0X6NyUWDM%2Bgv9qC2UKMQ%2FzAeJiEXFhI3qQw1rpGnZ65r7tkFpmb4Tkga0R73yvQJ5eSXUuNuZc5d%2FvJlXdKaOVx86o3giQEeM2NwprI58Wx6DhIdj3mttB07wgJKJ00cV58JxHvV3tTK4Vrr4j7DcNSlSPUH22VFWUxXjCdAZB9GqTPzVgrxP9%2FUK5K9p3qk%2BPOWVPjeDKr5a&X-Amz-Signature=78465259ab4a1d8c26569e0b3f47b94692327dd7f7f82f1903105d09f2d27ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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