---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26KTYY3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T213043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQKJylibgZwmMXDBzsaspRxJVU29DsRpYo40WwiKJvpAiEAr2O%2F4livVwphJVYZFRD3c%2Fgx1t5EnHMUd8GSVUOHFiwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhiZRouwbaByn%2BtZSrcA8eqvzs9LdROoo5MuHabZ9MFDLucgATtg86F%2Bt0ZdFCmVu31Yye0loovlBH504saRxPupL6bwvlOtvjkHcV5bY9siPSvj6C14Y1dBqJe6O58An2U%2BiMNyf7O6dlR9i0IUMD1gs7d6lLtbuqVJcRIPLQnMKQ9OGsvDbOTxW4GqKdWlBsN%2FxSm43l3SFO4Wk2Jvjs9nfZNXpp5DV8oAuZfPpMrr85TOhtCA%2BPBENjig8IY8toKZMXd2h76eSzvV%2B%2FalnGNG55s8pBFAydAeR6vtM80JE0jYOWBq8xW1I0ZEsYUOHZn4U4qxo9vPYNFwluHCL15eZTy3wHZXdUnWTB3iFcLlo0WxZyulHxXHkIYL2zJP07yHCU4uNWKrPE%2FILL57wwWsPkVePacHt8MM0em%2BKe1dlBpQeUW3anc0kFLXcFFkH3a0jVZIojqPexUS%2Fuqh7sHjhSECe4noGDAJzwpbooHKgG8I0CJkmSVIbqVbyDVd9W9z5zXGRsuWFR5lUmbZR%2F5D8Bec7Sg%2BboL%2B197APDeSDMknY%2BW5UcJcZJMTsHYKL4nd6g9Dus4%2BmoUNIzFbVRGo3fC2rfKFrIi%2BMZWCK2PZ1IO4dB0WpUYAK7lpp8IxDwjpR8QfIeMro4hMPCX78sGOqUBpUdrEiGg8KlUDrNnHp5CPe9nIk1J9az1zqnGHiZV5gaRsD9iba42WvJRwHfvK7RWwnQi9RIJPasObI0A0ZhnA7MAmBoih2DWRmWvlqBxmbFzQzEIhgSccB2ijqnu%2FRVWi1m3H6zHrjQYY9ymlDCfhMbuIe6U9v2ntQObm0T1zInYOhCViwFLV8E7qoPSOfGfSgzFJ8iPmnM0pyIKacSds7%2FAjeSq&X-Amz-Signature=7a81eaa2f3a5deb632fdd8ef40bda4a13d6abd2cab1d1859ef38bd585cec11c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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