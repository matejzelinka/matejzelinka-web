---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BLCNXC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T193352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAOOxO%2BOx3WjUH7UhBTX6duYqr09IxqiUbhbQXKdwQYAiEA5C5WLVAfujPaYociXgFHtemkI9jCjf%2FsDp%2F%2B%2FRZLGoIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTE%2B6ed8tsJqVRpOCrcAzTO4cVFiJCNcsXprf1M9vZdLgzll5GvQLemhb10JOtcPwvCOLYmhA07Rs4rOIA2QdHYsn%2FaTVnw%2F0z8aKcUnFcTfpU73k%2FB2yDAys3AsVHKVH768xiciVFW4s5WaXBz%2Bcc6U5Hdlk1yN4F0eFKcBNzd853f90k5ZSiPuYI5rma7Gz6KlvdjfnH5u9Ctz4ajvBhPEQzHuIEs9XzNhm%2BbyCNk4ow8Ied4c2DtEhaiaCnF0L11BrN4jIvY%2BVeK3jg7yWAmkCvY0npaldiVzeEHCDLOwPRQYJCPqU0pwhDP7e0huO321f2Anj4juXFQIV6H%2Bvh00QajGGQMS%2BPe%2FyG7RKFnpZa746t2SyzqjortTwPstPP%2B4UiaIDHExrFfgButthiLkc0yfLRsGNp1tGz%2FBf87jisfOuqkPMbBHGNFbi1UDVWoU65jVTIdQOoC9GGqa9J3sCqon%2FwPKQIFw1raNZZYObVxlVzQv7cVlF%2FMNLC7wduRSh0jA46lVWINzzy9vfp9BmuGyf2WqV0NGiM%2BxAxpVEyWCTWo92ugYErwG%2FvCGJ3OzsauLVT%2F1YvkLONWGnRjSpMlH%2F4JeckO44yh2XJyrFKOXbQe2qsXaxlqvZVcxX%2FVrMSlhDoUIQPDMOGH9MsGOqUB6MtA5Fh0ize0BMvar8TOKE%2B3xh%2BLsaTJfl3C5XAqeYlhoM%2F8FAq7wK4jCA%2BaegQUsxX24DWVIE5acGEzZ8iu486phBIDCcF%2F22jNQmCgN3fjkPAoh5NNNAvP1h6kFmB18ey5bBDeh7JWq1cco5mr0%2FDUUk5aq1oksbp8%2FFSH8ltzsXgcWBkPS5uqNUKQYitzi9W7EPXV4F1C%2FcaixH%2FXHX%2B4%2BTp%2F&X-Amz-Signature=1d6315a7e0b843af2901a6dc34f212997399941695b3cc6bdd79c6eea1b58f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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