---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N2LSAOL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T213117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGRmGOr7h5B4RRGm7VycU92USVCVGv%2FdsGq1PIhGmQhAIgJoDMynjBTrxOa%2FmfQ%2FK7lNy2LLjjgDCCOnARKpZVLaoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCMJJUBPm02gYpahircA87kVwFuQTcSy%2BSpEfDA%2FYAjXAL17rUL%2FQm0ftS9FBeYoZBg8tPFVv5RYU%2FDCJqhtQIhXq3T%2BuYH9FhBJk2YS3lSjz5YPlpt%2F%2FQPPtlDyvERVvd2Z%2B9t0nvHjAnbSWFIzW9m3MpaDbpepM%2BDmGMUCL5J6qPqR7W16qQA1u%2BuQozAW3koCFBBX7l9JC7aV4n17dY5HXV9Hly9x5NGHpQ7DKSQN%2B3g0nrTHn9heJKn8xwiGNfT19a4tzM0CYp1UAPSpv%2B93czEl2mKIPZyRY%2F2zvlk737LKX2cQdz7LWsP%2BXx54wFwYJzYODshrJBAzmvHrMvM%2B8kGKFFHLPm0iLEoRQZEA7wxexeQEj6Aw68q02Yn6c9abO2swYOfwYEAyjbIbs2rmro70PH50hlstrMI3xQ7kh%2BPx3YEnsvOo%2F03prR%2FFCg%2B7n7%2Bs9BQ4bXUM8v9m0bYHKsypm%2B4%2FOqkBGkxiWJni1fb%2BsDy8O0oqkwKOwOHW90ICzilelX27OYdqokj%2BjFFMrn3t7N7lsJkWU9R%2B1FX%2F9hm1zSut3mY0QPkYl7x0WZPHsWGaCaNKarnlN2gfmKxYLrp9KUCNUuTXHRgwFBhQ7ADiQBxgyx%2BDe%2BTRd6XTho2Xxi1TuOCQXrsMLS29MsGOqUBPXooUagYQbgR2CvTL2TzP9mkbIKa1O9YMfTrHjoqFsSEzTNza%2B5GdRj8f6%2Fdrl%2B0GN0CcSag7RPnn2uFNi4RkwFWfsiBDJZ6exV6dpNS%2FZGABQLFI%2FRwc75jEEabeJ6eDZijIC5yfa1vRLMI4yOpmYcodGTgtRPS0hG4V%2F2%2BGdlMOIOY9BmPpQWXenqc8JRG0ELp0h2wKn3eS61szpKuNXMRicpB&X-Amz-Signature=8d7b675e31988c43593a190235c3b3e5c4c723926b9cd7cfb2c27de50dd7df54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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