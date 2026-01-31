---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWUQKYR%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B1PAJH3UrRE2PwjOx2SHyNzRDPevytegzUX7cUchlBAiEA07LC8xbHMeUXsHGHV5G6aHQuS%2BMRrBHHCMhs3Sz1ygsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLM%2BYaYpptb2RtIpCSrcAyUNbvLttyX6FTMAS7BEIwtC73pNZjUeARFJqdtng7ezaAYfhzd3eaNeDZtPXBPXBXS5dSzo%2F1ymgPdPiLB1OR5hsNCIh%2BoLMRLAvMBhmInON8lZlx6fpvgyH0b%2BYQLXiF39ores9NuUBiL3BLqP4%2Bc9GHGhfoaSjExXCPIjR1Ol0s0ohxx0ABIYtAqhzY7%2BzM2uAWXsnZWnVcJ1TvSyHJGykjlFKjAdeEr3pt3xlIOVdULb%2BwbWutV5QqBwBu%2FFvUFKnBkp0DvnV6DDgHgAeCfciA9RHNS6IPgWGZDQr0fG73RCp3s0BfNzmIE1dMBN2mkHQsEa6JWeyJ8pLeKH2KHuzeb7mx9ByFFu3lSTJUBY0gtTb%2B4ZJ3j1QMBUGzvlJgBmF4HSYA3nlK0pE1DQsl6U4GElYGldTRlIYhRrvhwaqLuJglY5VNkCSnyCxY76N3iehMeASaFyLCU74OMc663uYiPdOH5x3ZOJ4l0YKTHZUB%2Bio7QaUqDwMQaMn3aXKi5fXTxXdkS0kFUYHd6px%2Bnplg2kdQUMQZcODCb6%2Bwkb5Ho9PQthpq1Ti2f3mVKw1CUO6XBh5tgpvtx4HpWT01MQ5Q2WtqgFSBtxT90E%2FW16Hn75jIdUxX9BkaUtMKus9csGOqUBUGliT6sDidCnA8axLUGYxE8XVjjqxPqtdCflx8LyD90iHBKbvRU5SazyNVzU1asio7kqxcA0zn0Ad%2Fz%2FcwEemxly8i53vFy8c9%2F9Ys4dXDA9TJDbAYgfl13Qenaw%2Bg7F48ffbeaCIE7EVmEff8Y7dddLfuHi7GnfPSZTj%2BBfjUAUqN2HgfmPY2WB%2Bal%2FoG353GWexMLaByYksI8ukRo5IxtiduFq&X-Amz-Signature=afc9ca6627f4421aaac9ab8f874b08754a88088d135a582e97fef006cd275987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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