---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMCWONK%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T052307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo0tiT%2BDEl9KljrY0c6fr0SRcK%2B%2FQhQIAHrCVtBYl4GAiEAzU2sTXotxjlcY7WLgE%2BjIpHgTKY%2FIl9qhNwLrG8tHjoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyZBUt64uf5xkTnKSrcAwIzKbv9Prvwb2SAbQveOFe63JPDY9ksusiSg%2F6Y%2FBIVfMR2rV8Mk2fP7HmbUFOLK%2F37oX6AFonFNMMNqVrKChRyYEd8ELsnOpOXa%2FIsNF%2FLOLak0GXFNs7NvnT7yMb8u9dxt78te3TxF1ill3Xxucv%2FISRpSz0TEgU0i0yXp65OTo8Cv9wwcGzzh2KnxZtj6FBcaw26dX61m6DZjURUCMHmrhNxnOLUygEldc2nhVuKFABbUdmLeg5q2fdDT7RU1uaH75syIEhTAyBdRaFRYK6Panu02wXub%2FlDgjh9TVUid5aHgZZly5x%2BRAjs0aN%2FDcF6nkClGLtXEiqbzNGyHUH6ddYBVEKshHrL%2BMDqJCy6sT%2BcM%2FmGe%2BluQKfpQnrAFmlQ0bl0hI5wjn0Jq9fQxEsE8LeV3o%2FlwJJS0nky%2B5z1ek96QOkEml5pQtXn8WD%2B6GnvIqKrrkWjPgw3PWX%2B%2FxrqF7tNw3znj94pVj6SwCNdQj%2B5IFqwbpU%2BtHkE70mDmdJI7QHrB%2F1NAe1qsyL5mbsqwTFl8e%2FsdnGk7rtUpzLI3wTlJuNmjMTnyQDf00mSOqgjIvt7b9R5mN7A%2FxG8uMy%2FZitEQ2ZzCroTZdL8rmcUwGNjEUj4YUXh0ScGMMye9ssGOqUBp92bkUvlD1yNATyCSk9B2nusaGNdCXQiPaWAOWxLtOrDpVdSk2mhYR4%2Fn%2B4XsqsxiSJpSDEwp%2FneWwwFyG4xgH5mg0RoYjfoDh95a%2BoDJpGLS0NrLcBcGebBe1RsIZTt3SomSwl%2BQnrb4%2FRqVig4DR4vgF%2F2hmYxUUpUCklrLec7Zf9uMg2gltNiqKm92o7A%2Fpyup75mgPHBtcVq%2F%2F7iY5KjGh47&X-Amz-Signature=5ba4ce2e23738fc553b38035dc806d69e19379de7cb33c99c1f8b4b92b9b6529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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