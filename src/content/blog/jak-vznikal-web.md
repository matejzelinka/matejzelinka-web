---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPAAJLA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T133908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAj7CCA0qSZ0Byth1H8F7ruFgDmw9uaB2n%2F%2BGbNJsbx4AiAUNrAIhdqYly6w6NjFJnlza975WXq750NPUSOvY19xfCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxY3ljTpQbPgwSvXJKtwDUMdGk1LLQNR7%2BzmrZLU3w9IOSNGmiBoB86qG1dIQuTwnB7%2BZzz7ZYwnx8PKVOFWVHB0uTFe88rjlg5Opnhr9MCn1ZGJak1VqEs%2FqSWtiDSBfjw2rIW%2FYSrQJOcr%2FHwoS%2FOjARk37qRFNplR9vfD%2BLRB8ImHXeWB4uSxdPCBsNFi8h9eai92sir5PQlfGW94fkQ%2BNeuGt9cTsvPBifGTMqXSMAQAve33WM1eNlNRLkBkUbEvdSzRzgT%2BqUy0xA%2FkjYghj4M9NH16tDCKbW59WvPpnw0tHozF%2BllXEhV1aIWYe5rA5puF1WCMGJhNWPmN7wWg68wnT0FVC2TzB2SONai3fsNIVMT0WSQZjTktjX%2FLKn6sVcMLV8ue0eiKsSc15MhhW6%2Ftvwd7utPMRR%2BWGFmPmfsERkeMebjwoPWpMDY%2Bp0zxnlbQsIzlemwqgWungxTwkMy2K13Y%2FoJ9xvvqSJuBY3BbxM4aHuuMd%2BgKUobexOEEk%2BiCNtLwb90tREhkU2gEOlQ6%2BSdKCsqhuXtEJzLuufEUC99cv1%2Ftf3ttYdyInq%2BLgCKUymgrTthsWzbBGILSHz2RD5jToPbXHRebZsrlZramor037gY4XZ1545AE%2FZo2yADz3ZZrYsKAwrZ2CzAY6pgHABLpSZa25FAKgkSsRsXHyZ2KnIopb6MlmH2AIqQBofl42lHMZySKJFUJuc1VKpmh0WsCGz8YjPVodw3hGeDhOs5Xy8spwNyd8gmUyXwwhRAZUZowI1Ubo8pQV5K496HUYuNMmGCEbiN8KS6IU6%2FTxR0MnuHWQw%2FOgit4OP91odk6Es8hDMstV1V1yoEFtSsmsY5qR84aDLd06WGAcH5LTiMd68CAj&X-Amz-Signature=8dee7139e0dfa1d174941a6392d7125354c39e399be0f02e39923e08805f0acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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