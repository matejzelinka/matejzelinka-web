---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ACTVKH%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T225050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4PGUet1g6KDflP9yytjdIIyEl%2BKjT75bKLeisf0adgIhANJ9%2ByTcVhCL5jlcBCXWDjcsvrSYHu0ky%2Bp9AKCkQUWYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwenvF9OuNhxtReVBMq3AOtITRnZ9P%2FFpUHJkZ3A1vM3UrG73v9LVRqey%2Bcv9o4kjxhLF59omFRmajJd6xChy4uAlcZVY6AmAqFq4vUmXJV4bOEZA4UJLyDcQUh%2B64yNRN8mcH1UJ%2Fm7rlGA4xvPJFjVDZTAY9fQ%2FMqsrHFR9OV2SlMomBDkUzVtOiBOhBuEqDOGlJ5c4yEWPZ2ssFYdyXtPr%2BJMH%2FCtK%2FugZMo5IxKRuUdBHWvf7VP1frJzrcjMvADOmL9%2F7r8L04r%2F7F7tVnsxl53kKZCHktKS5n%2B78Ik8Ik2l742zRxV%2FDgJZxwKZRiHbnO%2FFhKH1bIJZ3dpsyLklqd6J84%2FqPmqII4b7MCtXXDCJnqOIKhe%2FINygKkWkgYMDnG8UiMUBnsmIR%2FxCXtFjtPs7bxbjCECO1X9hbtqsEWtfq2udyfy%2BFcMfobBz62d57MgfuLG%2BXwqcrMhVdxGiAscQp1bI2JAqbyQve1SoGEcSt0BI4iO4JWh520clSwURiSayS%2FpYMYxN775MPyAAVVQXL21AbuXCUFPHEhhPduC9xrrg3K5ZNvdZlLUoxjgqonltHjjYEjMq67yi%2BY%2BJMRjvbMB%2FtmVZtQCQOmP6Aw61MDh16lKeMPRylrT%2FegEV%2B8eSRupyHWQxjDHm%2FnLBjqkAc51hN2WSmBxP%2Bs8%2ByoDbkhfDjLkWRHV8m7ERIyJID8eCgcfOqUWVQl%2BD8P0cYb1zHu9v%2BBHkKV8Dt%2B2nXdIEukMu%2F%2FhQfXVYO9v8%2BefydNY5rxdQx0fdkRLtCFsLyp8LUH%2BRlhrfVwT%2FPcLCcEA%2FoPOaY9voPyUruTj5722ZFUzrAb1Q8A2w48aCNc85l4GG5AMfX96YLsNCINVghYdCBEz84Bd&X-Amz-Signature=ef55105ee344cfdbe7b528e70059fd492f9802b46114fa8c1033c2cf93d66b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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