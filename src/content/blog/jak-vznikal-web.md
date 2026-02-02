---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFL43OI%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T073402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD1%2Ftfu4VZEhChwNQoaFHOAmd08BnF2xMysYIbUhJybqQIhAN3xbeBC81xLYhUo80zLKnFlltlfHRia4G6l8qlwOcK0KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9zwYzoPwzRoM4awAq3APYL69W8b%2FY0JMWMKBAQ9fbKo4Ixf%2BCGADdPd94kIJ3Qh4jz8UEcPtD1GgWl%2B5vihKOs9drS343TQLANARnoK4NCrilPX95LE4dKR0MU24TyxKn6rzCxJUYlZwytqWCGaat9SVkdFuGKcroN%2F4KL9GtYYY6eMqSSxJ5NtLZX5vU%2FoDemS412p3EJpTDVWUrlpf8Ba27oVesbNef3ZuOoygY9xi3%2BsiATAg2J%2FS2otBpQch7bT%2Bs%2BfkX1FXqUsG4gHeu2app9fqw4AaBdntig9hPhrLcZPk4zFb7%2BXZK8FhQA964sXaAzXcc3ZygrPzQdGcSjPYP9tTNwcbdmSQ3w9s8VJdSSxHjCdWkNzqEr6As%2BFNYUCZIfEKqJ6r%2Fso0gC%2FQfkfd69jP%2F0d3c04Mb6NaxHW%2FyeqnYz603FAMXDCMfHhqDwv2btk0748Bt4f5a6flUKHM1l9P4%2Bc2wClv6q7Yx48Izy%2FqjAKd%2BxRGdhjosfzKA6ixWup4SRQX49SMahNh9vgyByk%2BHtjDsgTbF1lp60Ovlu2ej2ZyitxYayjuFids9wJeDdxyEuJBV62ttz0LL2IBF%2BPQ7UXwx4XS9F2Fd%2B0O%2Fjo4iaf636Tk6kvlXjLivunzoAP082VRnnDDynIHMBjqkAblns3WqCHwhFGYDmnIRy8eeVbfOoXQA4tZecQ8tlGfR3rUg5EdtDXtcqIiFsqAD%2BH56nPJigkZAs6IE9jahJ96ezjHw0%2FiQEbHndQTLVA%2FRT1bDUvu7oNkJsqoAhUx0eDotLkH0WjJZgd%2BqVJOLa2%2BKai%2BIuwQsB%2Bo8eDYCStqDH9veEy1PfJ%2BFKcdzykWGwcK%2B9i%2F0LTnisirUJONIUp%2FewaxW&X-Amz-Signature=a55bdafc3ca175483eee3d9dd90e0bcd8fe7ff282e27a2cf69f36cf4d0eede7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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