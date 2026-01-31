---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WRVECM%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T134245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5gZNGcJlvm31P4s5aANZFE5XlDPNelEnfh7d3AIVP5AIgX2HZjJa3O39XZQ0PxJ%2BvnUMiWehOBLQD31nt5eavxbEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObaBm5gf%2BVk%2BW%2F%2BvyrcA1YrFkO6iRBBw26FwJcUiyXJyz7yKY8gktUIbuvQ%2FS77uymHIWXQ1bK%2BU0V25%2FxXXcV2McZlPSAncZ3FnuOKJxTdnOZaEpdfss7oMwATE8B75JrBRX1aDnrf%2BM0JkHgpuPn7Mjml6z8xz47BRyRehKiD6Dfc8rjVxxl5Irkq3bVVuMJyoZFEK5V3YmytnogfA2MKO%2FfucagHX2OpfDLKiTRe90ZbwSENapMo0JYJZRNQ7KKIGTZYRlTlLWSOCmWoeMkA7FesvA3NP1vNLPfpmWEaOumF7ddmmZbr7mi%2Buw9OAnw3%2FmSMez9sxaVK69GJwB7b%2Fy25lf6v63mm7ICbRLLzlEkgc5mQB7C21WJBlmQLoCZ%2BPD0pIFMYfLzXgABuDpznTMMMHedPrTz2qc7Na5QppCBrnZJ0UZNt93HbKE4UwvZeufzzzM%2BvSY3yxY0ldEqWWE%2F3SPvQgdyH%2FOpX6Hs4FQfpBTIQlICfRvMenMHMoUS4kWkha%2BTTe4IEvbIKxc9U%2Bu8wiBPur%2FfT%2BLu8rdu577vkvbpev1G%2Fi5TEjIti1M8K%2BNrvKNFrUKpNWqClgwXf4222Dh1%2FCUp5T1r7tnu3muZX1839obO6PtIroMjMb9PkNJ0d6CJ%2FB7%2BoMPmB%2BMsGOqUB2Fc98Lc8BDyNUGuhmzGUH%2BnmL9255%2F%2BGi5blbd2SbqArU1VF%2BYmgRNiVfeAo%2BCQXb6%2BqqSbuQYu50nQUOXpDb4LkqOzye5d%2F2S3tcARUzLBLS%2FnA1WZh0MI6Fw8z4yuYVq4SGfoRp86OR%2F2K72LbaTgum8Bt5%2F188cFBmdpZUqlrzcEyLxs34HkXhi0sVlTHwPRZaSv5W%2F5AFqSRGVoQnJOunw7W&X-Amz-Signature=16d90154cc0bd190257af0023183bfb8bdb858e6bdcc591d89f5f6bcef28a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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