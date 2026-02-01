---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKWF5WR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T145444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD6%2FtChIx0%2F5FANvTuFy%2BF6I5FlXyQn0HaP5MN1cemm5AIhAOmeSenLljiPncljFzhWZ%2BnhPJSe4WRO2%2BJeSOOtsBTyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoCb09ae4XOUZg0WUq3ANsX20bU0LVh4yF0AU2RbFm0lQG1IIc6FTpmS%2FW6ymK03uccFMx8x7ptm%2FVYYN4ggmkKttPYWBr0HIBgZNOgJTr3%2FenFNo9rISyjP4g5hUQ51bVJKB65hRja5Tl2Yh0MlkTVrzeCCVjUnxOztgKvhIzTmsVPupC9hloH7Ms9fQEwzIFT%2FDbGona14%2BtpdUPanZlg7yeqUrcVbzJFrwGdja0PONZ%2BlXOhIgve%2BK20tcAdeoep2vC%2Fb9Ux0ZIW0yxolQtUFwtMZLGUFYyHtYcVKsWuIcMjhVXoCf75ClhGuroPYK8nV7Dg6PMNvap4EmPnBnlAHJoy5dVYpbG%2FP2LzQQdja%2FseFSgdr0CB%2FbSKIQfhDJ%2B4Q96AiG%2BpMsr%2BPYmnR7IMbGOq9tke6iNHqkevttwr1DKAqm56czB0uPTX40qyA5RdGcIDVkcN7EJ9xJaGdxn63mRU2XBZYKUFuhEvrm2uVIOUzoPwkUyXoKvuhqHu3oB%2Br5a7BxsapfWh2yi9BVJUwO%2FftmUnuVgbxyVLEOxwmT1D4%2FptoQVIiL5wrOd1sL4fVNIyYuQNZx9cevfWors%2F7uPz1LwyvDiiJDS%2BtlMfPIIYNEE5XIdU297q3r%2Bk3E8BEQFkYUXJ5%2FzFDCF7fzLBjqkAYozWstu9W%2BuKYM%2F%2BOZNpCPFdwPLkHKyelm5nWkE3Qvp8tQdTE0HQS9%2FJdaIYw2wgEG1xaeNl4Ubr9o6DSScAWRpp%2Bx7CojaMUPmDS7%2BUD4jMtWfWZxvwe0ArUlw4funvujTgwLM8zIuuRzOeH%2FIEKWdGfKQey2DMIDpQHhUN%2BVRqmq%2BAdVor4JvBQiZu%2BH4cQIaaigiwbZh5fQZeshfmIWwBSga&X-Amz-Signature=7c752eb4ec743d1c8cc33d86c244690c41872b38748ae3b9a7a9dbaae86f0313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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