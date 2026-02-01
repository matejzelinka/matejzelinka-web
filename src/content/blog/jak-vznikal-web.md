---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMYOKDF%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T083818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgAO5J9pzPmdPxNvW%2B1Eaj28t4EIFI7iL%2FNx%2B%2F0oWpUAiAHew5enWa1CSe4Nb2NQ7PaDojewHC2qv3BFPLHMkvyByqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYc165cjPDrsj%2Fj7LKtwDdfLxrMQvfCXmnK42T0mv%2B6yPISgrYsPyYXq7U9RAhqN3pDgNHTbfqcNe1wIMlRVK3wURqxOnMP6r3omuUapz1cQFYhLN%2B%2FvaCInEWATQfLqfkeOdlKK2llKUx%2BnTkrexQAIesb2Q9hhvYGXVmy1hpQBloIH2XJraFQ4h%2Fjh9opG0ml3900UOwktCHVsuanGpKPtoo%2FUc%2Bt0XOfPpPdItNXUEay%2BHWZ5PCr2XX0LglJeu5T%2B4Za60kdbaz1%2FKL8h9HwbQbjwGYeX6O9%2Fsdp0b3fMCNXsPJ%2B6oX%2F4J9pK8lIXt5RSN8Artm37a9Ebn4jZKAtlcwUY7z9AVtmp4y8aXOzRwFoe24fDWhFUg5Lhi2miwLmd3OhhrYkw2RK%2BjWuAUBN1S9KomxWgfXVe4KZVjjdx7dLoYkb8LWQyD4%2BxUJ5euu5ui1COX61Iofew6fMHHOiuuBrPp6Hb87V44Y17i7cVjzWQZWZ9u1mfVsAjErdTag19MVOQ7lNJwqQptH7PJS8ou1HuLtzrtDXu6NRmqSEs%2FYJ0mD%2FWOKQjXh1%2BzT2QiDbMLSwouL9SDnFIOwjjLllO8XnlJDq%2F6MKEu%2FgwYIBdg6vJRs%2FlaLCaUogosXK%2BbV9ix45%2FhtooVKHow4Nv7ywY6pgEBdAkpHCsZf5jfoAjAezQwSuY0ECpitqiVIXtus0HxgfDL8Pbp%2FO%2BAejgKW3gNfwvWbbG9HehA6O7p4bYMXBP71BCk47EEQ41HPTH%2Fpg%2FtrwJELczoTKRnykAQcnGC%2BNaepcW%2B%2B7sRur9p5pcNWOyDLZYSMWQCs480zfiFFFFO9XTtYbm7xnCpRu7tkSHSPxunJgo7yHwCp7Ha9mD4rAgA7E0eBfUj&X-Amz-Signature=b8e8889648761f8cfaf120bdefbefff244ff8a03dc21295607abd7dd6cdc223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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