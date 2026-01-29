---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HVGI4Q%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T115602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfAeLa9cmSzEitvO5DUDKiD7YMzDQaDvHN4UQMPb3xQIhAPBbTaA4XU5aZjDBSci3QCaSoz4OJqPIm4rCo9tVsfN%2BKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBrgQyZ4yF0O7SLlwq3AN1Y6nz%2Fy%2BN1kIrMm4zKparFtdDfRu4ETdteNdCK0iQZL%2FKJ6gK9zqv91gawHpFDljboHSEzwasxdkwjUAkZsyR3UAP43%2FwXd7hbNJ3vjBtGKPSzI%2B6beRNBXNm5EzkwnDazjsWP8NqPeDOCjcICCvM300D5lMal0ZJ2MG6muW4A%2BCAFzp%2FKv0mDdTw3LzT5QTd%2B4PLUUP%2Fq2%2FeYea%2BC6wM4CV7C%2FeaVzlQgkiiG6hbo9nae72s%2BH3lAWssiNnlm%2FSm2OaiMGOuKPjfRJAC58Htx%2BHvUQtcXdhCJHX5M5xRhC6v3ZqIUmKgSVbPI5gkbtc7goissOcMwJ8poZaTZsBgp7RaHyS7tDBruEg6dno%2BWDpXUVbbi2JkBOLWJS1BfrkeiOnmFjGJeYo7KDrwyIzotFJwZ9fMJc7Q05D5cclEMhwRI19KtSi309YJ5l77%2FK38WfoqPZkgMOndNwcVvb9CoIlYuvgEB0TxNi5oa42aEdqMs3OSy4AlZ%2BQoW1R3x3%2BENi5rbT1jGs7akqg0YV3dHLZgEJufP4iln5oQ1W2aHx%2BS3qslyL5yV%2BZRck87tAFqmINP7dCCuvAmzNYc%2BbdD7MKvPRFt08HHkwOQfXH5FZ8L1ug%2FpwGTph4pcTDg9OzLBjqkARxAq5fWzU3iSfsNS6oG4bQtB7gGZuz6Deb6a1Kp%2B1aznNNmLFX%2Fu98EXkOdi6%2Ftmt8GxQR%2FDg06tf%2BByyX4QN52Je%2F8gvbgHAL4vY%2Bxrb48k9b2Rvzibgqn4%2F2jPSzJYDY%2F3Rhp2mq%2BESlmsyI%2B0%2FpPv%2FL9RXmRdDNvRSrP990kn6SR4SA9VDtI2V%2BFaP74IFv6cEkPlNJqH4ppYGBihkpAwT1B&X-Amz-Signature=229455576c6380eb73e89278d9c20611e91776db82241f512f023c3f55dc88d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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