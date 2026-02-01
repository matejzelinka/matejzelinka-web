---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQAW5FUL%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T125536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCf5KtOVd3zbV35mYDgFuJSmZsZqJKEn9apMrRo02T61QIgBkv5yC1lWC3NdjAiW8K5GH7PdFT64qP86xJP46d6QpUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLegbiWyLapCVOow%2FSrcA8cqactKzzrGZT6c%2BYvFlTH1iein9YndDcXFUhD49xrVjzIw1x5t%2BapOybUb2sQHa0TgStrFXB3RzUrJsnLMPPPrIulzV4LCsGqA8iY9b6kErx2heaDiuCDgNaXJfQdkm8bSYRlXUDMCj6FSGjkka21mtxicjkrbHhDn%2FT%2FWQSGfsgB97KdlTtbE7vRtICNUgxa9iAReKoN%2FAllrzXST0vXuQhx5XVWIeN8KKr6IvwwleFI8BpsJRErDSfgh6nOfKIRU9SKHbxN7mx8agbfhzGveZLUaDaT1sca3LuXhUvCwqJQ7Bq3e7P9XXjAOmWY017ldEP2ses2MfK9fFJu82DpFu5CkFN530twSxUI1lr%2B0v%2BkB3uis8X5yYOqaj3L4Ad93XcnbFjSOoupIEx9lJLepOrI5vgO58X98fWa%2BdFEmn1XQNDqK1PVu9ZsjF%2BOjiauaQ7xgdbCfXHUmSwoVWfWXp7PvfZ2slpKa2A5GKIlseuQJua64wvzsTgOyMOn7TxBZBXVK5RF0PjHs3YarS8bRevNSrC2VuvWrVzYgPRnZ02ReW4ybtjyY11pC2gQrx9HokvYAeIvtGFRlSNzIXXDlkq2oax5mI3ur5MqVrCEKNlG8hN%2FnbqVOAAmbMITt%2FMsGOqUBCvodJN1OSSbLlNluBZlArXR6kU9coYPy6buyNc%2FmGfszTj258JYlHN09Dq7wqjaaHT5Ul7WogPf585svwUtOt0X6KJ1TJFHd3USbSFEo3%2Bn0UqUpWMgadJm5bzK%2BM%2F%2FiEBC7Ol57iWR8AaF3QilWtqk7DcZXDdjcbPnohqf7k6TBoYUeUPSoCBQVzvqpRatvS9dYJp2%2BfYmxSQemHbOn9%2Felqu4c&X-Amz-Signature=85bf24fb3acb01e63d7c34889fe9c23afe3c9c114faebbaa4e8729e85babc56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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