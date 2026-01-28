---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G4GRPNT%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T215206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcduHCV15ydLXLTW5sbHwtLuqJ5DiMn0U37yh5dzxRRAiEAzf8%2B2w2KtWjPp60YzEZStddzDKmgsdgZypPt54ER2Egq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFau99xev1XXV%2F8cnyrcA8I1xgny6vU1v5dl1e4Duokw%2BUmrrcsmamnCEuSiaUIEwQE89LiGk1WqqCQOuDyoglt8l%2FHFJs1CdEe5e8Gh89GwOzJYQbdzVYERIp0qIoSFOAqc6WSPkgzcovT4z0lJpv4fLmDtoOLWm%2B5r9uzTyut%2Fy8%2F98NNrAoEM6%2BAoszEZuy4e9tXRaZxteyWe7R7pfPLMtbZ5B0o3VIfKx6FB33Y5knnw8uz6Xyb%2FyRkj179Bq9YDQ7lE2LZD6KJsBJ%2BiWM5q2epzJnJps6wBeGBIh32ZB%2FA%2BIOBPLIW0%2FJy%2FYgaHA%2BMphrlMSoWhBGq12jp2rpr4vR6JiOBItrfN1mIOH3RuX4LIC7z81V%2FlqapMoNhvmOViGC2zX5QSO9nrL2tVdj8O6jUNQ0UhVeYbW5KjhO73lhe7cKMOguWMBTguUxSSMxl7eLlKAuGlc7d3Bv6uyR0wF4iOQSPPO5gMWWNSBimJzMe1jVQdJIC8rz%2Blh18fIF1u3yshnPfZFO%2BSpRGfCboC4F25E9iof5UlktCar1zC2FkczM%2FvKWJQqvRPa5wGsYWnI1wD08ACl3A3RBU93AxEKqIOeH8G6svA8Kq9DP%2Fx9GfH0UlQ6MVDa8ZZKaDSmokwtRt1X1ikdwpZMNya6csGOqUB%2BBpbG4NCNdBAbblhtgazcTMsCYbpb6rNAdSr97nx%2Bstt4nVBaVnFC9BPyZQmfkqbwLGr28pzr3rbkodj1jl69LqVlHZmxv3MxoWh20r1rHVssa8%2BCkcEGWBmBnfCJUfQnguCMlfQ8HDqZbgNwcf20f6SEpHsdozjd7p0GKKzAwxKLfava2dapG7Dg4FQHKA9vXaf94zRAYtpIjBianxIkc8onysT&X-Amz-Signature=c9345355342bf3a2739003384d013684268e1b9d6bdea5e201e306cb9491063d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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