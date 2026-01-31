---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEUYXGAV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T183706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BxgJEdzlHko4fs0KGaGx4UAaaIUeES%2BQo2V2fkp34AIhAJ%2BAX5OFo2qT%2B%2FuEsDjfrWOMsNZHwEnQhrCavFoCFN8zKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIrjki6%2BWtYvxYCx4q3AMEP%2BZWD7fN5xm2He1S%2FCmaPlfJSOS4TvqFMiq5HwVLpDXmuagZx6hgZQguKFqMoPg%2BhU6tEXILL1XGyQ329gUUF4gQppOfdnj9hb2oLbk6Ub3e%2BXU5F7I38MSitYNnUo3QoY%2FcBi9t1YO9aRWO4N870207wh%2BabiQFI6hTcTqCYKcXGkDmJ04XbroTSu%2FDdznKWiKsAWVFuVo3zWasD8ce3R5hkvbdA4TwBJpfh96rWlJVm160saSj60aX3pdEhRBPXZMrM%2FO8DU3Pi91ZJRKxq4if4H4HqAsE%2FITo3RHjcg4lU4%2FGxqG20K2cgLnph1H52fi7dHHEmjnqAtyGXTgouXhWgEaztyN9Pj6XgHrQTcgoHbEfh4caFc6U1TlnDxqJe6nQ9W3pSm1WNgMO%2FCMhD5CjjS62WXXM71Ol8GMqbgQiTiHD6VnKJfErau5caqEu45MGKFbZGzgr%2Bevios2MbYE8ZYMVRfaPU9FkCm6CceL4%2BKFynTITRZgJAlsj%2Fvoryimeiux7Qj%2BBcf8oHvrqHMaabQqAHWC1JZiHplIZbNBKVcuLzSQwU2w%2FDugG%2FzspOlm9QXHzgnhZHetvFLweT2oFxSQducqdGznZSp4VrHJ4gmRIk1GdBZ8AazD4gfjLBjqkAdYYfXjPZvzHdTeRhj%2BeB3nM85sLe0NzQzf5Aft8ESMw8h%2FMqgqQoxDJTcljO0Fi73IgrXhKmyAIcc5pLx4kGMjQH1n6k8%2FafF%2BAbj3%2F7c78zGc730Zqvmt1oJwXWF0LPHz1yVSVaGU92lymw4Io%2ByJNFjmFqbL4irEr5myMG4%2Bpvq%2Bo3rUsU10gMvs0Sn%2Brq3rUdKJYdwuQDxwbgdGV1loyYMbp&X-Amz-Signature=38fefa9cdab43272b300301751d6d552bf76ce9c2874ed3e9c7f15c9eed46722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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