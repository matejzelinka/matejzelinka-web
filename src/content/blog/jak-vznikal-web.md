---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCCQ3XX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T090233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWNDNElelRc8nQRcELdJpE500zCTjaz0r6W%2Bp6xjsdKAiAuG75GlJErTLm0fkbQ866SeESYIUq08IzF4wAtgDBGayqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPs22PDvMK7J9OMbkKtwDjLY8qYwkEWyVHJ18aOAM6DeEYaG1Q9EKbqfW2Jcjg3RqbqeVod7%2B7AMLTwvke9%2FO9kwLMcwDjEoNISe9Upn2IIcAKnmLms4%2FD85Ioj7KqmhYveXW%2FECIASn3%2FXXH14p9TkEd65vLstr0iCS%2FEYGVSJav3z99%2BT4tLMGmM8eN1K6VjHhYxyJtfVXaRJKU6J4uG29AllynRlqomhNYWy6hL7M9JYgyM8qCsGtJef3Kj%2F9mAaY7tsqQsnfdvBCDPpJSWPQqZ6b0VybOdCUGsuV7A4mM%2Bybqki56ZEQhbVGsq9U%2FEloOuHrAxjWvEuckG9M9zXcjZ3peXKhUtL%2BiHoHZsDUJRJInvIp8l4Us2mfPXTSmsOh5f7mJ8clUGE%2Fz53jqPR%2BA4euEVg%2Bov%2BkHKAMq%2B591WTX8Gpy9aWNxPi2LB4npEzBkjm%2FTbEJFGCs4G%2FB9P%2F7vAZBR0ytjRDZqinj%2FMSvYfiYsJ0RtdxhTUiLxV3TWSoxW2COWTBomXGJydNNiFVXL%2BllDGjKfgo0OZjOJuKmTs8M9qvsvDZ56BDxD15eYLDqW4daeHmx4PawLW721MaygesKSInGzoEO9Ub0XrpfXlmSRlG3JPRVsMZni9fKCez4pgZdeOIH1ieUwg73xywY6pgFeqE82CBybk7zzt9wQnbOARAt5D%2B73quTPqz7vgiV4T6K2P0Y%2BdT6GkimjV%2BdPFVioTFJ9kCmrYZ8WHjNPKvmjotrcANdSrjSc5ZA4ozlsheHItTR%2F7XOVmKnLA4%2F01S7kZQKp2zZCeQ68Aq4qcf86G0QFfyIS4sHkrlg077GSM0vLm1AxDfxdImwclA0KbQJRC%2BfsPFf%2BmHM6wTdIOk59B22eKA15&X-Amz-Signature=70e0ce5a95fdc2cf95c010d89727d3e576f76a4b6eae40e4e25fb6196b08dd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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