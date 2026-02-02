---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPGXXOM%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T104945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCfW6Qo9%2Fibg2zcxCDF67XQ7IeuZEk3JAd0Tkzr9MK4FQIgXngeFnFcsBUqall1rmdcDIin5NdDEPdapyU6eMXM3gUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs32um9PoIWof2vSircA0c8vAul6mQg9KljNSAihUI0eorBBiGnTRWZlTNvjSCqF5LXKRAogBNvlnqZFnvXCJMUgTLK99i8g2HEOZexREkd8oBEyi5G7lYbX%2FZ7wDOYI1SwgSPBc9eWLSOi1imjyUopuNBzbSV2cMgNSm57O%2BC%2B%2BKNGHlUpHf%2Fg7z%2FXYvk6bIHb612cI6ULQO%2FH3bTpO5Fit4vnEjp%2F64c1yh%2F%2ByKYPnmFrYGAc2JReRoJsksU%2FxsH%2F3Rqk77cLkd8WlDLW%2BLBymxsz5jeEYo5c8XU9H%2Bsem54gn4jVIi8k5sOGlOm%2F7qzZ6NJrI2lxqd3B9Ml4Oio1sqFMF1lJNu1uEbi0D7x2Wy5DwY6jR7rZtfUj48B%2F83fNlaIezJm2WUHFXcvbzMR0C5PTc3Os8q0k3OV8XjKVUq%2BVltB5DDjwP8qY%2FTUyrEXzNxsgLMVtsGR%2B1yL5thRuOlKqTUjihfz4HSSVM91ykgRE1blf9PMw0RhST8t098ckK3dWo6%2FC5Iz%2B2gn1KcHzcLqe1RjxiOUKOOU7Tc1KEemTwU5hO3%2BXpJQc%2Bgi4DD5JTWQv45JVLUH6o9AFd5HDjOYTkcUwCFPNK0BVOIvKf4IB64n7N6GvxLx3%2BxRlLu8IWGqDasAn15nFMJT9gcwGOqUBLVQ%2BixDMIDOK9J3ektOSWKNbx0x90KhnOZTXVvSsyLflEf55K4Cr%2FLtEd1SMkCxikTos%2FpqLQ4EWRtYsFexEHLZNtv6k%2FJ1fe6gGOX6z6Cw7ajcPvbuW8UHp7syzWXLi86LNYe5u6qTIkI3Zxb3oDycl1H53v%2BjCMCXckVp5tj6kC%2FxhDH8bKXlXH2lty2t0G2MdYv5mxVNxIEYdT7syNzSpdhN9&X-Amz-Signature=a88711fca80d52bc9934b0840085861fb745cce68f39c116bd4ad13e7ee725d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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