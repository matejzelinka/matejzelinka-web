---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WH4RBL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T092422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF%2FNBAT1T1dKzx5dGzrtHUh4pp2h6EiesMJDiUWx84kAiBMtDCivnOFa3Z%2BemuSpLe2C8W0F0qdunwm3DJLUU8TgSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlM27zS%2Bq82SZixUYKtwDvb%2FwiqI7fYYHokRSAewdEPBBjwb%2FkLyTaBczDCoOeF4QxqBCdJEE9jYOFWS9fgidSCa1i6Wq65cFQ6gsHfrRXTr8nsMoXRo5Sz7PaO8X1gaJuHqGfw3H88jJU0y%2Bl7tYWs7GK5NBhdjFGpfY5GwNynAcWRawSRj6ghO3cUT1jnbAo98B5EX0Dd%2BxUMiU8%2BpXnMW7PQBhHTjSfhnTqqoia8Lg9kWhWI8ytZz6y3W%2FcnfF7mZ6BjXBCf1y0Nvdbxp4oPsL5%2FaNwrhd3RPaqKlNYyiJHZnkfup4G4k%2Bmg2c9e2b5HQU6cVcJ7GEP83suQtqeR4aYQx7g%2BLXoWVVOJq1XJD0b9msztNz6ScMrbbZrlEjHLCmPoz80Qa34El0hh8fwWZuRHeG53MgZW2vrztpSfsrTe5Wk6W1uTq7OWkZX4pTOMJ74l%2BJl1P%2FVMzqSkvZFQNfhiHQ1QOCH6H3JRolHFuwLMieNMBD2bqVtQ5mNvEjXbKI8660WyxjWZH%2FxfHP2%2Blul%2FXAi7sPATApXRVvBSTJ6EZSTNTAEnKC4qefS82Qo3rtH2eW3BDTP84tuNBKUlh%2B8gUw81G7pNFouufepM4ItjsWeRyP8mrUFc7fEC0%2B6qCXE%2BxVefLCUWow9erxywY6pgEsMDBl4aH6kdMo0Q10Hu8L5O5Bui6%2BDd%2F426ycDdEVdbDLfB4et5RX448wStB%2FCi%2FH044L6KHGgGqMurJ8IPXWfUzQ8NtZ%2FFndrKxiWvOu8yajCbHLh%2BnszXnE1i%2BpKAhXAIbm3ND%2Bwlv4HiDzxsXFtLfpKBhMVqg%2BEaF3gTojxFoPuQA6Fu%2BORrMqwDxOhJBiwAevDMBnV2yZGNsvmcIEMLlhWayc&X-Amz-Signature=981d819f8add691d3f116c9858954577713133a1fe916e3a8520e6c186598df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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