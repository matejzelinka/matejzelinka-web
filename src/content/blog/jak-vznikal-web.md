---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYF5ANDY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCI00FXx6PjSPcJDVPNNgY0f5eRCnwYAB1u%2F12wCUrpqgIgMXkvWj406Lj8KeL7i%2FLEaolyhkgKdPobtdnkojbz9JkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqq%2BBNU9WiGeer6OSrcA5owKOzE0WO72NkmJmFn6QBremjIiCKklO09W0Zof0IMH3hh3tmBYSKzRgPg8XU38dW3jKs8lQWPapSiCPzTv%2BRdpt43akR%2BK0wgcTBR5jYK04Qm3o1TMlvgGYxlRBmplGeCD%2Fsuk0eVTcsCfYG%2FKsNSVCG5gC6bYhimXdWheM9vnX7ElHdR9nNVsKDEGcsxFuJynZv%2BC2sSm4Ur%2ByFTYqqdFeFWrGszvOuTnd1PJ3MwEbqJ63casbN5mdtbaBDb0%2Fse0ApkXqaNjJ5L2S01DInTn%2B%2BUh0DnZ1zP8A13UGr8BIF%2FHxQVmYODQcK49QErdHLZP3LmfJQ04ubC71ToDsv%2FKf85OHhcFAlNLkB%2F87Yf3PAM6WpJWdXlrkdJMRS7Qa%2FPDbdUrTo5iSScWdahvL5fKZRB6L9i%2Bl5%2BoxW9XZYpr3rbmXbwNcbBJazSNqDEnteIeV8mjDxTc39xnldgvrcsa0BjYD%2BLM6MFMpCYk6GcJoejJpPkqkpZe3v9qSts4uolM%2F1zrQOerokvJWhcHlcPbem3Fs0RjYb12kIsfrV2SMso1g6n7Da4h%2FzcmBCCEcJMfCqjGLyX55fQEVKqinHhof9OdUQ76rc0jEx3GqqAyWZ5itlOFoJv5b4%2BMMiJgMwGOqUBG9bkufBXlTYDXTdzfdMEKpPjoNYZUaInARrXpsLD7%2FIRqTzLkJM8NNWDaxnq1Jobg5xbXAiqs%2B2DKpRNM61RAHZEuwM2UMTulejvOEcHm47dFskaSLoG1UpB1WI%2BtG1Ylwgyg%2B1V4kqWD2J3pfc2oVUinU2%2F2buELmd9Ls3ZwfP6q9WrsE8DAFGo8o4TA0XO7k8CJds9HdxVZjHZFQhwOHhoZIk9&X-Amz-Signature=644308ca517369b151987babca04799136c87d2acbac052757a5576e2cd3620a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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