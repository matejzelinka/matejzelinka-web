---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KMP5EQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T100207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B0ItYjUfm9luaLKzuBizQ51r%2F3VRE8bO%2Fc85FM8b95AiBORKd3SjEOKs8xCdUh8KU3rBKmjVS01cmzayLIqal57SqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB1twU0hiCrO2V4MDKtwDBakXNC7hf9%2FwvjE4YbmKbOXfEtDXUv2L2OTU%2B8ermYxjOaYeuxLnJ7OMC0%2FrpuqjCQVtd0YzBBEPAwO1ixeL%2F60ROUZjvbUPojTM02es9HFDheW%2BtldY5HaqsE74zwNgF3PmtSr5f8EmdjfpylIg9iVc25wwmBVHEtq%2B14GCRV%2BwgVPZkCQ5PtkDVreCbNQcn%2Bsx6NQsdZFTWS4Qy2w0pHlDEXzEVRA%2FINBMr399Gt4NpnJjbGn5%2BccyL8xhzeGA2BoXxCssZyEA8W9N5HwTJbpmpf8zALk6QJDIGCt12DYZMzaHp32s%2BHn46Vtio7v%2FXxO9pd%2BXHF9yRqeq1pyxBMySsqgiT%2BhzM2ktWwHdipV7oZdlhT2Yms3RXIYLytOXNEThtAYUP4qoFvb2SfGfzWH6uQ1oToMZUlQ%2BaRcQfbrLif0dojtUQmLfKkyFbTe4RKyFsaQBY822Q25OxAbp0ltSSiGO9ejFB0XUqebcCfoCYYiWIihlzH4Xsf8SPMxAZ523yHdTocN%2FpcCQ3Hcu4L8h2%2FpKGkMFL4iA4QT34ZwHvJDPGgYx%2F5cl28tgyDT5vAG%2FzgjCc92MEyfxD5IX5lOqqGKmtIJRJbWPn5xCmmOekTsW7v6Cc8PCicYw2s7sywY6pgHpxbXTIpy%2BQo5UMXNflzY%2F8met3Q8anVp5VchzRH3eGuPJ%2B7%2FinRkmD3Ub%2BTSnXUrT%2B6g60UJuDqlCTXl%2Bc1ydQuIkH3nxuRf%2BK9NRZRRNf2Lkx%2BID%2BS3u4ORcVY%2B%2FyhOa4zp6FGfuzKststQgghCqpkuY3ut7A2aJPHDzcu39s9nZchhfqJqK6aaQ3N4NMiKcnEUrkKeogjoyH7adr4bIYYnLX3%2Fx&X-Amz-Signature=87bfb329f01c9a4210f29c7b8f8b54be4caa273ed5232211aef1866e7aec15b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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