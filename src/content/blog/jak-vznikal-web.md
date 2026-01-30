---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMP56YT%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T021402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClG%2BfY6ddOEXWbNDIgPg8U1OhZ2v7znRfVBqdWm3XWQQIgEDD8J6%2FlQNBJ4j854qPBm5VLpYrwy8cVM6wBGlOS5fMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuU7Yp52xL%2FDhkaQircA3VqLSt6mhRXjuDj%2Bi4sS2Ph3%2Fu7Mvc%2FNDEbvHFT%2BIg24H9KklUEkxLVoqcE%2BSLKZr694aLa3r9GLNt57GFFYt4f6GPf6M1y5TFveAgpBzhVghVbRmmKINM9au1E4%2FfZy6z%2FLX%2BL7IZrw9eLPQILr1eeHJ9puWDFlUv0VtKUr40FNO44MITHvS1gL4jntJ96fehsfzpI273%2Bxa4vZaaftAyD1%2B%2Bqyj7aOUXg0n%2FRxb3cnZLiNPsk1Ebe7B8lz9i2Bir%2BN80bxBn1yjnODSEMgsvUbi%2Bw8DZ%2BRXRcr4Luq1CgYnkWubweNRllfqqdT8fCM7Ut8H9o3N6R1PkuLaACT8xoAxO%2BLvptbJ%2FtgnpCBbdS3zToa4xpmnab4JEztG59jSZpe5xCkiq8AUBTZ9zyfHcTdjR1gtEOxIoBa9njpz%2FFwCyD4hQ7cUUFP0ZaQy2lQ39E0XD25mKA07xT7K2FJUQAvQRTP7d4kgTyTcSAecPcQ4fVVQhMk%2F0I32zlLYD9NjU%2FtVjfxNVJ0b3aMTXk5%2BUzQvbE8OD%2FtZtH%2B%2FYRRjGtBpXkfQRGlTfzTaqN%2FYd0BFliy1kISJDc7COdLbVm8WYyCgKzaBKe0mvdy7eNV3OvRBC2Ty%2BWdL4dC%2FMJMLKH8MsGOqUBkML0HPndDnEmbRs37uG81NsLSCuFtPobc0cMZxU97yDZZoym6D4hqT0radStxfy4wYwjrbmIoIbTIm1QZ5NB6WJSpdsO2OEB4BL3JUImYNF6NKnsTh4sgk4nCWpTzrbsii5Q37zcgRSF6Wnbj29rpY05Pu2AxKSSStGSxW%2Bc7xkAtLZGUJH%2BFA9GH9%2FSB%2FvCJWL6Opxbl%2BCulydF2gYxcmRHvEOQ&X-Amz-Signature=4a4fd3d70a774edf561e6663b634a17dcfa2fcfcbad9a0e9e81b0761b36d173b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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