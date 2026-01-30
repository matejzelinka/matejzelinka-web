---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNBMCEX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T065433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqj9Alpoqt5YcskbdtAu1k0r6VUW9Gssqq3QNtkuafQIgKB0dW7gA2PN37joShH8DXmIg0DXUN%2Bnloph3bvoA%2F70qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FAsdToBaoA%2FpMkOyrcAzqz5uFWH8U%2FQcMYafr6YoB%2BFtknbtRXJvRGitJCmDSSHs15BRANSWhwoTkrHsJeIFn7LMICTCVQdAzP%2F0o2NSY%2Fkw3CzTxsWPJii5an9zGcMfb4G3LBSWqchAt6SYwIk7TgxzONwkyIwRZ9taTEmT%2FEfUV0ktj8x02M1fWfsfIv0c3DhtcVkk9hz9B3p9VRNuxJg8Qt953aALcUQFV%2FDA7NuQfHekuHLkl7PHzMm%2FlM7q%2BJl%2Bzw7kNXy5z426B%2FwV6TVnNbQCUkBtwL05jPK1v1zteYiJ4OdSaaiaWRXj7iEBe7pylVSLyuedvVyuEJEsNTcsQJOlb3XXY12Hsvcgw39Oe4n9TIfHNwEDe%2BGyTxoYZ0Ok8XfWPbfUUAAUbj0K%2FrOz8uuRVy9axWsODF85QD771q3CIMJsz7Eu3ENDLEL06GRASSaVCY%2BLyqByUbsUgcLlDtqu4JecCdDdWNzFcsp5vAnBfPgpSfWzzF9NNgD%2B7qef6RbQx3en%2FPb891s5QdOJxWIATXqiIvwX9PHgtUjXsbATVjEh5bT01LGWr9PXxKUp3qilw0K7cQ9sl8sIdJmEZFV2Ty8ZRsx%2Fjs5%2FvdmnW8vFRiTiiw8TL4yAHHbOIhHDP8698F9UE1MNeY8csGOqUBgvVEQIHjxsXDsrnhwASzv%2BZbILwDYrXyXO4DlBmtn1uQwLDfjau%2FElWqX5ddyyt%2F42JlPcOpq%2Frg4GkrzecsUGTOotB6acO83xJgDdRt7eN%2FvbT2IHAfMwi8kfs6RhUlp0Wuz1YT7wVfa%2Bc%2But50ThPvdNyq4%2FWb%2BWXqnYIUtWGRgFG3yrat%2FC91ri854wFDS2Df9V8PMC4IWdsmHmNsir7aNUUo&X-Amz-Signature=7492b7327f4aac83793a74772566778570c7172e2156c2fcfdb37c04c00e3e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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