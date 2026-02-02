---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5DZU3Y%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T095421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEHpUpci9vmaKh0S%2FC83SuRM4DZ7u3msWVFmylNXzx%2BFAiEAqeS7G8VV8CjltT40iWFieoRwubl5p5HEd%2BBazNc96zYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSCIqjJRuPJd1gJQSrcAy0A8sRRdwKhdWQr%2B3BKuinqTkhKAZm5%2BVIbiqc8VLinhnsUDJQLnl7QITsuuL7WpYnZF2NuZJcXj7KipXz2JvoSAL2Xg6zemKLd20F5fTKOU39uSE77ZhnfSSm9lDsDMIuoh07DwzCZyzUhJxmHlz4XEyGmM6A46aWIdhs1uDXoiPjARrjLf3wUJL1U%2B77RnFt%2F1GJPhs%2Bz3UzpgDqmOTwodo3qGk4nGa9WYp%2BxLOgadGA2dNb3QqRA9OC59hExoW%2FVUxtse8yq3MiQO%2F%2FP4GrzdxWN9J7jZ0naWOxfNTI%2FqXkPoquAsbMdxA9pdcXgbJQdk5TWWErEUSx2Xqppyl3pz%2B6JzzHV7Zwt0XOw5tsFg31ayPmrjnG4RQtvFGpBMcBoZkN%2FdAhryUqm7DWt2PAskAQy9B4K9xx2n05unTcwHCr21uuggJOw%2Fx6TmEOOIdPW7GaR6U%2BRAnEiEYnsjlPD6JHOKPVMHJrWH9r5oEL1oZhgYtbQu%2BnIoExDFXI638ORPlHxbuwC8baqWCWvEm7V9Le9oFopI2IhVGkb1QbT7obdCneo%2BnsNqSxypgKNtlcqwQd4oD55lDvn63FDXJpb%2FH9qejEbBr%2BBih4X%2F%2FDnk0%2Bzy76GtSiw1JDfMLLfgcwGOqUBKFelLoadk1dtN4ciHmx9iZREzrTFsKu2Yl%2FD9n8VtmgtNd6SQbNhRk%2Fv3ocE8kmu%2B4ENQBxl8eEJaBcv8gXtupFdbE3nQdW4EnxKdvGbJ25rQNmf7dnnsGtbmz9hupYd4zuX8YS1eNNDKYBTLnePxZV%2BOZQ0ombCuMBv5Y7pRLRUQB54f%2FDQkqmUxpjpU41ZCW2gDhN4SEVQ%2BAyEiP2codgojPMQ&X-Amz-Signature=fc09008edbda790a3b007d88cb3609820c36da2717644d9f736ea2d167624344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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