---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BI7OEGF%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T105839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1V9JXH4uE8ycUF0XI79LHdMcsi3nxWmRawY%2FXMI57tAIhALYL6LNN6xsa%2B5LMhcpB%2BK4nQRJDME6fEPme9iOiDkM5KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnkoMPUBTVFSwAlr4q3AMqhJO9dJ6esCD3JH8xLiQNmc7L1R%2F7eu%2FUNvhTfL0i9fuO13KZyKIddDlZ6mGNt6TyKF1e7YvFJnobhG8c1xonKQHd3sNr6XiZuwSDb%2BM%2Ft0fV%2BL3G2Nb4iwoCMZ02xRE6CjqGKHrYXA7JAGEC9HREUnULUwRaqikcSSd9AULFI1CYT6P4QJzMSDoZ5YuzEgqjWVRMfU9lEwk58PFhQdxcY16mRoMNPWAtNCGEkXSLTC46yzcle%2FBG9LJ158rWZAqRXHo9x%2B2rlAeK0NWbso%2FB43MNRqUAn71yTeH08Um%2BLrN%2BHL%2BincMTFbkO%2B8xdvrYKjJRa9PrQ5nTTel3yJmdcnfPmVPhPtJssKEUEPbfQSyBDvVZfFYoxD7k6efI8raO5%2BhB7Wk40ucMzLoHgxbEcwfN%2BC0dTKOsTUt1CCYlTSFErlr1Yi%2BFlGR2WIDMki1Ug0r8PZ5nYL%2B6JLi5WgAd8wdHzHs7JBXKK9ME2DgExTz4WVdW5le%2B8rK0SACKtwQAGRFucD2MCWpOc20FPBHbJOLKC4fEkFYcB4e8xlbmEeMFOST2A%2Bs2KQz1QU7xhed6KsO3mSNXtBythGjUkRCCOJHRy5A6WLUaBENbLzUdP1HSshvrMAn%2BIDebPDDCUk%2FLLBjqkAXaykwrvl19hAIt6M5cgUyilIXxZzDWJ7oMHOcjiF9fFMivk85W19Ct6Azvw4%2F%2BUieY5vj0%2FqGDbU9brInpLIITm4OrxbS%2FgIFpWw1F%2BqG8eLwBoc8dzwmzH8EN6jz2WqUmPZ8NBUbG8a84EyLNS5l76HWaIEOvLzww0lrkFEbGQ0NcAXqdpt04z%2Ft1PfKRnGMM8g%2F%2B%2FgfjUp4JyGOEjapylvL3Y&X-Amz-Signature=a68d236d783dd3dfc557ae1836346f21adc89abf2a6a23b3202aad56eb368edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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