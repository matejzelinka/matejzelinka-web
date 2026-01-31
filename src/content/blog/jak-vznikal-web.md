---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQX76BI%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T142705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC55qbQ2nQtZa3y4yj4qyhqhm4piFneqzL%2FYoNDm5g3UAIgOpYeV6oxYOmC%2BnUuJVn8rQrxZpK8DcitzzcAO0%2BgqWEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9EcUWqFlxkm3uQIyrcA08XUDJ8GrWoPJ7WC%2B5%2FO0hFGzpF1H%2BJ0X9Y1Qutvwyfv2DDRBstVvZx7DtgBEEJzRtzx6qPls7ZkKs187hgNu8fQMea8JyCrPyJ20a%2B1oRDI1djauJyRcnZeG4P3gH80%2F%2FSykI7ndF6pWmPU4mpjAfqSETDidgQJRSwMeB%2BcAXYGUGS5Kpy519dWtoi6ZaEiqeWTDfpSF4cQx9ckh5emk08Ph3y2RaXJidc%2BUUnRZnLQZQJ80BJhYC7c7BxAPYPvoJIB1m6puQb7WkJ4LNGMoBXWXhWIEuEdVJGcMkxIfHQzQU3ilZozN%2F8qGJjKwmuMPge8Pzl5%2BLibviE2CsfPIbMqglAe0%2B6p4nDamIojgI4wsC5vK3zHcSg8%2FnEycsBw7ACZpGoK1CEvAJ7f4E1inNIj3ucrFgXXJ3y60KQtKDlGO%2BLN9bxBRLcQB8TkPW7zvEVW%2B4K5VFfYnFSnoRsk%2BVcoIxj6N91%2Fg4YH6XRj5Ra8Usy4UH5loDvWUftdGKPzbWQAOsm3hzJeSX%2FNdmRpjCsIIKtBd%2FhWj6mkazPXyzsOEgA8wDlrGxAZe7xrXjfx%2BFr891wA00J1%2B4%2BWSrC66kREROCQ0rWyiHzVeAbdOArljLZ%2BDz16AkLA%2FMOMPeB%2BMsGOqUBqvs08RYYMB23hKPKV2c8JdWFzXbXBhMKdzSAyDt5zIDAM%2B2iMieGlufaXbZ9ibFSSZcvuAPEMzwnbcF1G6mJOFF7wSCXO99trAQckVOWP%2Fsiio2CKhL4PSxjh8viMevfdpxv%2B66gvNAZaazDRC7DJVeRwKoj7rfbCqZYdWd9qHhC91NLPY%2Fozqk4bQrBV6A2JWDrk4UC14YZ3uIO25%2FgC4iXbQYk&X-Amz-Signature=f6bf2d8f8e2347fddc1e1b6f2debef941c8572079ee992ec6ddc1707737c3404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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