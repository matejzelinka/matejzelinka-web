---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBTK5SC%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T163231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID88GXw9PQ0WW6FQeYX%2F1myO8y1NMlbc%2BIfcRv4v7Lp2AiAluBSxohadTVzSyIM%2FZ1E1b7N70CiOoXWeIvA8qeDDByqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqStQsGJ3rqKJvoNKtwDMSDUQC%2BFCSLAcYrhTaHqZiQXcqMiqAGZhAulRAc%2FatKV6WQzBDX0w3Ib1WN3NZTs2wtplEsp72zZQJcGsShV8MG1TTN%2BbIlXAqC2b2THcOKiTFdRRGlsJG74hAHKza2BG5Wxg6CO0wbMBnpz99dRpBzbkCLUwqp%2BedNzJ1LZXY2urRS4MmspfhkJYHl7p%2BqbH%2FwmDqv%2BOnkkoo484seKqgRTXOSW3bgJ%2B3fryeTbTrhXN21PjvTjlYCQrwB4aEkZ4cNaj1PW%2BQrBeMheokG8cNSIz9EFK5YC06FLqlYkLwg4PiyXgqDQI%2Famf5vVGBkfcFbp%2Fc%2BaWUxYOslXehNfZxTLA2kqAcKs%2BOQKLp98CvvxStHArskddXNuGc%2FoKamxsNpsEQS2H0kpwWXqc1ghIMua0JJRWILhvLNxRld3nWvV1nn23wET5ED9axQHuds1MwlcXXeA3jt91vsAidhoyAYYvSgOeOW4dGt%2BzAxbO9ZIon9ygJSOKTpEs9s4UnHLAQ%2FE5Nt2Li4z%2FpgVWab5FZWPwX%2F0HSZK4HGv%2Bklstri1FdG8annW3heIrYoCyRK1dMYFhPYvd7mtTaiGdG8mA%2BGeQWguNat9HW7acLFFHe930yXY9kqXHyv2e8EwrtL4ywY6pgFElMBjOK60sNeXpAcXxtpDtJRy5CuqLS%2BD2vIrFclvCzc2ZChF6C1nD4oksVdvjwayxsfznYR40OmGlg8OkRN9FefPGmh4tcdM6Be2S%2Be5MaBM%2FNF2fk8K8LGNyvzbXVHXFBfP5J18gVClSRTVc2gHsj8ThodDwrfuBYvEuFcBB5AZZ7sw%2BtzcBLin2EOCYtd7bl94JZiaPkqKyEfgdTKDBO%2BGPwiX&X-Amz-Signature=a09a6752fe853f70ede692a5539abf796057a4011cd034fb54b0480f661e8d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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