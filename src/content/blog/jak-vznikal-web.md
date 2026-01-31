---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TGJYRH%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T222615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcPUagA4XPblV0txAKLjX7x0DSw4CJfX7NFyElAoGePQIhAKnl6QaBuTtqpLTAIUL1q7kETp0OFEuksGAmfyRYqWj9KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOVVStE4zdPUBHQXMq3AP3bEGtEmfpsQ%2Fmuf2vhcbQJUqw5JH7Ebv9KCQN%2F%2B%2Fbsal5%2Fe8cBwG9B%2BZs2JwXTV2zJzsBFBsXr5L1fgBARx3TOI2rAYHOQIenVX0GiwreNC%2FHt8fRhpVotNW8vq42Zpj%2F8EJRTkGEMeQJ%2Bo6TZJNIVGZrZTLHWE0APZYFfPjPLy%2Fw6zPRIJA5UBFn6gsZY7%2BLAUPFyMggX1jJkpBsqSurS8IhJ7pcFQUxusgs1SgUkYiE7vxx8rSzlITHDDSmns5hxrg%2F2gdIXjTQJ2o3G5en3z1a%2B17td5nQYmm%2BaPKyLb9i63kFwBpCFd566pKa2U10trF2NGgKePJNjNJ%2BKApv%2FsYDaJNd6AxtvliCyEumbdjQZdtFkmijcGCH%2B2BZNZe4EdrvZebGS%2FNRYTeNiHVJ%2B0Ln3%2BigDvCVc4MU30X2q4pzAdInenN%2BDQfI3lkEIG8eAD4hvrmh2Z3Gd2pqkihpg%2FOvoOVRDYOmSYDXValw3viPfDfjTZxzuSpLTckVOHhlvoLEQadO2dPa4uJsTJqx2TUIeqmn8lwQejgPTrsjzDngpdip2bHDK23klfOorgmRMH58pL1%2FZ9sFK4NYNbf8aBZoOmagyYwSwT6HeSFe2pKIVf7fP%2FpMflSAeDCbn%2FnLBjqkAWHoqWBFlbl04OEkI7yMQ61pCQq4VVtIkXdbP1T9La%2BF6r7xH%2B1904JmbN29hQHRJAVAynvQfMCr%2FU%2FDDM10P0KxkRtuHogQFRRZEfDKZMA2TfU7EWMRTzMWGuHXXMPeSCsmV22m%2BNeNHLtDCv4Er6cc6JH5VuxKvdb4pNt2jEDu%2Br6mBkWFhW4Lix9%2Fvu6PrWBwKimaA15JCKZ3nqpni%2FMCuoDW&X-Amz-Signature=a07eadf8d3d35749a10355a0f81f03c6994064546c9b2cbeed7620fd824e445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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