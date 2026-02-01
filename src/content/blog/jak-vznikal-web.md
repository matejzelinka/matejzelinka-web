---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKSY6U6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T134644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA1E2xKuvdFpn%2Fi3tZ3rBfXeJRSXgAJPcCp%2FAnL26uoqAiBRky9SX%2BM5wkJVMFoD1CL8vSJCdj3mGF%2BZ%2F5Zwh28OJCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqFmSm7PjXiyBJBJKtwDgRUiXavOlnp6dXFCmU%2BF9aH6nYO9NLPeIrPPUas9vtxpgJ5LB8IWUfLEnZvqOzkPmRNY1EK7B%2BV4W1UXR%2BuSgItkAHL4LaEAWV%2FyGlS4PP7yxodSyIk91HlgwClQIT0T%2F8wLB7PwxCLzz4u2oBU9AjFF%2BBF4pqfvpYUs5DcVvOyQfGSfX%2Fi4iEssdYuMBrQm%2BJfSSHovGf5k5J14DFW9FjMwYoCAtQRFIyre2povQShatppkXUfGfk7uyuFc1p3H95u15MfMEdtCCxyxHq%2BinlY7YL83Uk9U00t%2B3NG38%2BydEt5rPsHdyZy90aQAADn8428vGCuPAN6y0tffilhNZNU7%2Fhyr3FyMdfrCB8oUgRPjyqDRxRa2mGpnfWydd77W4PaAXkTL6uxZlRrAWMaw73iHgp%2Btip%2F97CBUuhWAZwpvZ4EiT%2F5lPHTmzYB24ny8cmcq9D8Dwm4RVkyP2c5hhyGCJFM77XiIe3leOPIf5LMctywRdsNJXljDpga7jFOyYtqPev2uqa3DMnsofz%2FFmBvN2GkOhw8Uw6m%2FJOEEZPl1B73UMkieMDh0aO4MSELLRVlP7LwqvJ1rO0rMowqT%2BrEQG9wHuI3zmcl%2F%2BNDDXaWuZ4ta%2BPOhkjdMnaowhO38ywY6pgE6MNg%2FYh7P92k2iXf7SapuV4%2F64LY%2FHHojGFkoqn3QTvwmW6SVrksmnyjMvZyJ%2FYF5EI2Jbw9eP8FhzIC1V6QkTjsydZEyxh3dejdAHnPv8z6rfFzsWLQjdUEfiIWljRc2AEa587Vc98SxPcKjE8vN0l9BjSREq%2FeXptFSYS88WBMsP9rKQ7JpBDRK3s3R1RjmlzY6uLVfFs9HVqEr%2B6PnH3Nncu9z&X-Amz-Signature=267511138cdea4546e8c189e512afb0fda935727aa2e8dcdd713f3c4b531c1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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